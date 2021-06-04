import React, { useState, useEffect } from 'react'
import firebase, { db } from './utils/firebase'

//router
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

//theme
import { CircularProgress, ThemeProvider } from '@material-ui/core'
import theme from './utils/theme'

/** Router */
import PrivateRoute from './routers/PrivateRoute'
import PublicRoute from './routers/PublicRoute'

//Homepage Components
import { About, Contact, Guide, Home } from './homepage'

//Non user Pages
import UserDashboard from './DashboardComponents/Dashboardcomponent/UserDrawer'
import Main from './DashboardComponents/main/Main'

//Context Dialog
import { useLocalContext } from './context/context'
import JoinedClasses from './DashboardComponents/JoinedClasses/JoinedClasses'
import ClipDrawer from './DashboardComponents/Dashboardcomponent/Clipdrawer'

//DashBoard Components
import {
  DashboardAbout,
  DashboardCalendar,
  DashboardClass,
  DashboardContent,
  DashboardFaqs,
  DashboardFile,
  DashboardGuide,
  DashboardSmile,
} from './DashboardComponents/DashboardContent'

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
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
        height: '100vh',
        width: '100vw'
      }}>
        <CircularProgress color="primary" size={200} />
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {createdClasses.map((item, index) => (
            <Route key={index} exact path={`/${item.id}`}>
              <ClipDrawer>
                <Main classData={item} />
              </ClipDrawer>
            </Route>
          ))}
          {joinedClasses.map((item, index) => (
            <Route key={index} exact path={`/${item.id}`}>
              <ClipDrawer>
                <Main classData={item} />
              </ClipDrawer>
            </Route>
          ))}
          <Route path="/" exact >
            <Redirect to="/home" />
          </Route>
          <PublicRoute
            component={Home}
            path='/home'
            isAuthenticated={values.isAuthenticated}
            restricted={true}
          />
          <PublicRoute
            component={About}
            path='/about'
            isAuthenticated={values.isAuthenticated}
            restricted={true}
          />
          <PublicRoute
            component={Contact}
            path='/contact'
            isAuthenticated={values.isAuthenticated}
            restricted={true}
          />
          <PublicRoute
            component={Guide}
            path='/guide'
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
            component={DashboardClass}
            path='/dashboardclass'
            isAuthenticated={values.isAuthenticated}
            exact
          >
            <DashboardClass />
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
            component={DashboardCalendar}
            path='/dashboardcalendar'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            component={DashboardFile}
            path='/dashboardfile'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            component={DashboardAbout}
            path='/dashboardabout'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            component={DashboardFaqs}
            path='/dashboardfaqs'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            component={DashboardGuide}
            path='/dashboardguide'
            isAuthenticated={values.isAuthenticated}
          />
          <PrivateRoute
            component={DashboardSmile}
            path='/dashboardsmile'
            isAuthenticated={values.isAuthenticated}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
