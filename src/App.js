import React, { useState, useEffect } from 'react'
import firebase, { db } from './utils/firebase'

//router
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

//theme
import { ThemeProvider } from '@material-ui/core'
import theme from './utils/theme'

/** Router */
import PrivateRoute from './routers/PrivateRoute'
import PublicRoute from './routers/PublicRoute'
//Non user Pages
import nonUserHome from './nonuserhomepage/Home'
import nonUserAbout from './nonuserhomepage/About'
import nonUserFaqs from './nonuserhomepage/Faqs'
import nonUserGuide from './nonuserhomepage/Guide'
import nonUserSmile from './nonuserhomepage/Smile'
import UserDashboard from './userdashboard/dashboard/UserDrawer'
import DashboardContent from './userdashboard/dashboard/DashboardContent'
import ClassContent from './userdashboard/dashboard/ClassContent'
import CalendarContent from './userdashboard/dashboard/CalendarContent'
import FileContent from './userdashboard/dashboard/FileContent'
import AboutContent from './userdashboard/dashboard/AboutContent'
import FaqsContent from './userdashboard/dashboard/FaqsContent'
import GuideContent from './userdashboard/dashboard/GuideContent'
import SmileContent from './userdashboard/dashboard/SmileContent'
import Main from './Main/Main'
import { useLocalContext } from './context/context'
import JoinedClasses from './userdashboard/JoinedClasses/JoinedClasses'


function App({ isAuthenticated }) {
  const { loggedInMail } = useLocalContext();

  const [createdClasses, setCreatedClasses] = useState([]);

  const [joinedClasses, setJoinedClasses] = useState([]);

  const [values, setValues] = useState({
    isAuthenticated: false,
    isLoading: true
  })

  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection('CreatedClasses').doc(loggedInMail)
        .collection('classes')
        .onSnapshot((snapshot) => {
          setCreatedClasses(snapshot.docs.map((doc) => doc.data()))
        })

      return () => unsubscribe();
    }

  }, [loggedInMail])

  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection("JoinedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setJoinedClasses(snapshot.docs.map((doc) => doc.data().joinedData));
        });

      return () => unsubscribe();
    }
  }, [loggedInMail]);


  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setValues({ isAuthenticated: true, isLoading: false });
      } else {
        // No user is signed in.
        setValues({ isAuthenticated: false, isLoading: false });
      }
      console.log("useEffect", user);
    });
  }, [])


  if (values.isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {createdClasses.map((item, index) => (

            <Route key={index} exact path={`/${item.id}`}>
              <ClassContent />
              <Main classData={item}/>
            </Route>
          ))}
          {joinedClasses.map((item, index) => (

            <Route key={index} exact path={`/${item.id}`}>
              <ClassContent />
              <Main classData={item}/>
            </Route>
          ))}
          <Route path="/" exact >
            <Redirect to="/nonuserhome" />
          </Route>
          <PublicRoute
            component={nonUserHome}
            path='/nonuserhome'
            isAuthenticated={values.isAuthenticated}
            restricted={true}
          />
          <PublicRoute
            component={nonUserAbout}
            path='/nonuserabout'
            isAuthenticated={values.isAuthenticated}
            restricted={true}
          />
          <PublicRoute
            component={nonUserFaqs}
            path='/nonuserfaqs'
            isAuthenticated={values.isAuthenticated}
            restricted={true}
          />
          <PublicRoute
            component={nonUserGuide}
            path='/nonuserguide'
            isAuthenticated={values.isAuthenticated}
            restricted={true}
          />
          <PublicRoute
            component={nonUserSmile}
            path='/nonusersmile'
            isAuthenticated={values.isAuthenticated}
            restricted={true}
          />
          <PrivateRoute
            component={UserDashboard}
            path='/userdashboard'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            component={DashboardContent}
            path='/dashboardcontent'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            user={loggedInMail}
            component={ClassContent}
            path='/classcontent'
            isAuthenticated={values.isAuthenticated}
            exact
          >
            <ClassContent />
            <ol className="joined">
              {createdClasses.map((item) => (
                <JoinedClasses classData={item} />
              ))}
              {joinedClasses.map((item) => (
                <JoinedClasses classData={item} />
              ))}
            </ol>

          </PrivateRoute>
          <PrivateRoute
            component={CalendarContent}
            path='/calendarcontent'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            component={FileContent}
            path='/filecontent'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            component={AboutContent}
            path='/aboutcontent'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            component={FaqsContent}
            path='/faqscontent'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            component={GuideContent}
            path='/guidecontent'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            component={SmileContent}
            path='/smilecontent'
            isAuthenticated={values.isAuthenticated}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
