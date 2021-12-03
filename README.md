# ConnectTheDots

ConnectTheDots is a functional LinkedIn clone that allows a user to build a professional network by creating an account and connecting with other users on the platform. The user can create, edit, and delete their posts, as well as invite other users to connect, and accept/reject any invitations they receive. Users also have the option to attach photos to posts or to their user show page as a profile picture.

Live Link: [ConnectTheDots](https://connect-the-dots-grayson-poon.herokuapp.com/)

## Technologies Used

* React
* Redux
* Javascript
* AWS S3
* Ruby on Rails
* PostgreSQL
* jQuery
* JBuilder
* HTML
* CSS
* Git

## Features

### User Authentication

* Users can create an account, sign in with their password, and logout to end their session. In order to access certain features such as creating posts and viewing other profiles, users must be signed in.
* Users can only create, edit, and delete the information on their account.

### Uploading Images with React, Active Storage, and AWS S3

* Users can add/edit/delete their profile picture and attached photos to their posts.
* Before uploading a photo, the user will see a preview of what the photo will look like on the application.
* Users can remove their profile picutre and any photo attached to their posts.

## Code Snippets

* Add/edit/delete a users profile picture
* Handling file input through Active Storage and AWS S3

```Javascript

handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    Object.entries(this.state.user).forEach(([key, value]) => {
      key = (key === "profilePicture" && value ? "photo" : key);
      formData.append(`user[${key}]`, value);
    });

    this.props.updateUser(formData)
      .then(() => this.props.showModal("profilePicture", false));
  }

  handleFile(event) {
    event.preventDefault();
    const fileReader = new FileReader();
    
    let user = Object.assign({}, this.state.user);
    let file = event.currentTarget.files[0];

    fileReader.onloadend = () => {
      user["profilePicture"] = file;
      this.setState({ user, photoUrl: fileReader.result });
    };

    if (file) fileReader.readAsDataURL(file);
  }

  removeFile(event) {
    event.preventDefault();

    let user = Object.assign({}, this.state.user);
    user["profilePicture"] = null;

    this.setState({ user, photoUrl: null });
  }

```

* A single signup form spanning multiple web pages with the same URL
* Maintains the state across pages, allowing information to be edited even if on a previous page

```Javascript

render() {
  switch (this.state.formNum) {
    case 1:
      return this.emailPasswordForm();
    case 2:
      return this.namePronounsForm();
    case 3:
      return this.currentLocationForm();
    case 4:
      return this.headlineForm();
    case 5:
      return this.profilePictureForm();
    case 6:
      return this.aboutForm();
    default:
      return <div>Form does not exist</div>;
  }
}

```

```Javascript

updateFormNum(event) {
  event.preventDefault();

  event.target.value === NEXT
    ? this.setState({ formNum: this.state.formNum + 1 })
    : this.setState({ formNum: this.state.formNum - 1 });
}

```

## Future Directions

* User Search Functionality
* Uploading previous work history and education