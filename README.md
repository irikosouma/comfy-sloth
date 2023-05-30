# KidsPlaza Frontend Tests 

## Introduction

Create a sign-up, sign-in pages for a kids plaza account. The main user of this page will be a mobile user. 
The page should be responsive and work on mobile devices and dekstops.
The page allows the user to create an account and login to the account.

## Requirements

### Technical

 - The page should be a single page application written in the latest version of Angular or React.
 - The page should be written in Typescript.
 - Components should be written in a modular way.
 - A CSS framework may be used. No preference from our side.

### Functional

 - A user can fill out a form with his firstname, lastname and email address.
 - A user can add a picture by clicking in the dropzone or by dragging a picture into the dropzone.
 - A mobile user can click the dropzone to open the camera and take a picture.
 - A user can click the checkbox to accept the terms and conditions.
 - A user can click on the "Terms" link to open the terms and conditions in a new tab.
 - A user can submit the form only if all fields are filled out, a picture is added and the checkbox is checked.
 - A user is redirected to the two factor page after submitting the form.
 - A user can fill out the two factor form with the code that was sent to his email address.
 - A user can click on the "kidsplaza.vn" logo in the header to open kidsplaza.vn in a new tab.
 - A user sees a loading indicator when submitting the form.
 - A user sees an error message if the form submission fails.

### Validation

The validation of the form should be done in the frontend. The following rules should be applied:
 - The firstname and lastname fields should only allow letters and spaces. Maximum length is 190 characters.
 - The email field should only allow valid email addresses. Maximum length is 190 characters.
 - The picture field should only allow pictures with a maximum size of 100MB.
 - The terms and conditions checkbox should be checked.

### Design
![Login Desktop](images/login-desktop.png "Login Desktop")
![Login Mobile](images/login-mobile.png "Login Mobile")
![Sign Up Desktop](images/sign-up-desktop.png "Sign Up Desktop")
![Sign Up Mobile](images/sign-up-mobile.png "Sign Up Mobile")
![Two Factor Desktop](images/two-factor-desktop.png "Two Factor Desktop")
![Two Factor Mobile](images/two-factor-mobile.png "Two Factor Mobile")

 - The background image is set to cover the whole screen.
 - The page should be responsive and work on mobile devices and dekstops.

## API
Use mockup API backend to test your code.
