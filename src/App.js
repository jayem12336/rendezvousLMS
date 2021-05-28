import React,{useState, useEffect } from 'react'
import firebase from './utils/firebase'

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
import UserDashboard from './userdashboard/UserDrawer'
import DashboardContent from './userdashboard/DashboardContent'
import ClassContent from './userdashboard/ClassContent'
import CalendarContent from './userdashboard/CalendarContent'
import FileContent from './userdashboard/FileContent'
import AboutContent from './userdashboard/AboutContent'
import FaqsContent from './userdashboard/FaqsContent'
import GuideContent from './userdashboard/GuideContent'
import SmileContent from './userdashboard/SmileContent'

function App({ isAuthenticated }) {
  const [values, setValues] = useState({
    isAuthenticated: false,
    isLoading: true
  })

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
            component={ClassContent}
            path='/classcontent'
            isAuthenticated={values.isAuthenticated}
          />
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
