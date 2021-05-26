import React from 'react'

//router
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

//theme
import { ThemeProvider } from '@material-ui/core'
import theme from './utils/theme'

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact >
            <Redirect to="/dashboardcontent" />
          </Route>
          <Route
            component={nonUserHome}
            path='/nonuserhome'
          />
          <Route
            component={nonUserAbout}
            path='/nonuserabout'
          />
          <Route
            component={nonUserFaqs}
            path='/nonuserfaqs'
          />
          <Route
            component={nonUserGuide}
            path='/nonuserguide'
          />
          <Route
            component={nonUserSmile}
            path='/nonusersmile'
          />
          <Route
            component={UserDashboard}
            path='/userdashboard'
          />
          <Route
            component={DashboardContent}
            path='/dashboardcontent'
          />
          <Route
            component={ClassContent}
            path='/classcontent'
          />
          <Route
            component={CalendarContent}
            path='/calendarcontent'
          />
          <Route
            component={FileContent}
            path='/filecontent'
          />
          <Route
            component={AboutContent}
            path='/aboutcontent'
          />
          <Route
            component={FaqsContent}
            path='/faqscontent'
          />
          <Route
            component={GuideContent}
            path='/guidecontent'
          />
          <Route
            component={SmileContent}
            path='/smilecontent'
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
