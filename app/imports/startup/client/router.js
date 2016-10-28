import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/calendar', {
  name: 'Calendar',
  action() {
    BlazeLayout.render('App_Body', { main: 'Calendar' });
  },
});

FlowRouter.route('/create-study-session', {
  name: 'Create_Study_Session',
  action() {
    BlazeLayout.render('App_Body', { main: 'Create_Study_Session' });
  },
});

FlowRouter.route('/edit-study-session', {
  name: 'Edit_Study_Session',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Study_Session' });
  },
});

FlowRouter.route('/edit-user-profile-page', {
  name: 'Edit_User_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_User_Profile_Page' });
  },
});

FlowRouter.route('/leaderboard', {
  name: 'Leaderboard',
  action() {
    BlazeLayout.render('App_Body', { main: 'Leaderboard' });
  },
})

FlowRouter.route('/user-home-page', {
  name: 'User_Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Home_Page' });
  },
});

FlowRouter.route('/user-profile-page', {
  name: 'User_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Profile_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
