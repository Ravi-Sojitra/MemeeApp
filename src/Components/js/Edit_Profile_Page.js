import React, { useState } from "react";
import "../Css/Edit_Profile_Page.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import edit_profile from "../images/Settings_page/edit_profile.png";
import edit_2 from "../images/Settings_page/edit_2.png";
import axios from "axios";

export default function Edit_Profile_Page() {
  const [file, setFile] = useState(false);
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  console.log("image++++++++", image);
  const [show, setShow] = useState(false);
  function onFileChange(event) {
    console.log(
      "/-/-/-/-/-/-/Image Upload in react",
      event.target.files[0],
      event.target.files,
      { [event.target.id]: event.target.value }
    );
    // setImage(event.target.files[0]);
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  }
  function onFileUpload() {
    console.log("image is))", image);
    setShow(!show);
  }
  const [edit, setEdit] = useState({
    name: "",
    image: "",
    phone_no: "",
    bio: "",
  });
  function clickToEdit() {
    var data = new FormData();
    console.log(data);
    data.append("name", edit.name);
    data.append("phone_no", edit.phone_no);
    data.append("bio", edit.bio);
    data.append("profile", image);

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_EDIT_PROFILE_API_KEY}/profile`,
      headers: {
        "content-type": "multipart/form-data",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //   const baseUrl = "http://192.168.29.141:5100/profile";
  //   axios
  //     .post(baseUrl, {
  //       name: edit.name,
  //       phone_no: edit.phone_no,
  //       bio: edit.bio,
  //       profile: edit.profile,
  //     })
  //     .then((response) => {
  //       console.log("response,,,,/--", response.data);
  //     })
  //     .catch((err) => {
  //       console.log("err/+/+,,", err.response);
  //     });
  //   let userObj = {
  //     name: edit.name,
  //     u_email: edit.userEmail,
  //     phone_no: edit.phone_no,
  //     bio: edit.bio,
  //     profile: edit.profile,
  //   };
  //   console.log("user object", userObj);
  // }
  // (function clickToSetFile() {require('dotenv').config()
  return (
    <>
      <div className="Edit_Profile_Page">
        <div className="CommentsArrow">
          <Link to="/Profile_Setting">
            <img src={Back_Arrow}></img>
          </Link>
          &nbsp;&nbsp;require('dotenv').config()
          <h3>Edit Profile</h3>
        </div>

        <div className="E">
          <div className="E_1">
            <div className="E_1_1">
              <>
                {/* <img
                  src={imgUrl}
                  height="150px"
                  width="150px"
                  style={{ borderRadius: "50%" }}
                  onClick={() => {
                    setShow(!show);
                  }}
                /> */}
              </>
              {file ? (
                <img
                  src={imgUrl}
                  height="150px"
                  width="150px"
                  style={{ borderRadius: "50%" }}
                />
              ) : (
                <img id="E_1" src={edit_profile}></img>
              )}
              <input
                type="file"
                id="image"
                accept="image/png, image/jpeg"
                onChange={onFileChange}
                required
                onClick={() => {
                  setFile(!file);
                  console.log("dfdfdf");
                }}
              />

              <img id="E_1edit" src={edit_2}></img>
            </div>
            <h1>{process.env.REACT_APP_EDIT_PROFILE_API_KEY_LOGIN}</h1>
            <h2>iammemer@memee.com</h2>
          </div>
        </div>

        <div className="Ee">
          <div className="EEE">
            <h5>Name</h5>
            <input
              type="text"
              placeholder="Mr Astronut"
              value={edit.name}
              onChange={(event) => {
                setEdit({ ...edit, name: event.target.value });
              }}
            />
          </div>

          <div className="EEE">
            <h5>Email</h5>
            <input
              type="text"
              placeholder="iammemer@memee.com"
              onChange={(event) => {
                setEdit({ ...edit, userEmail: event.target.value });
              }}
              value={edit.userEmail}
            />
          </div>

          <div className="EEE">
            <h5>Phone</h5>
            <input
              type="text"
              placeholder="+123-555-2514"
              onChange={(event) => {
                setEdit({ ...edit, phone_no: event.target.value });
              }}
              value={edit.phone_no}
            />
          </div>

          <div className="EEE">
            <h5>Bio</h5>
            <input
              type="text"
              placeholder="“Like to travel and shoot cinematic videos and 
love to catpure nature”"
              onChange={(event) => {
                setEdit({ ...edit, bio: event.target.value });
              }}
              value={edit.bio}
            />
          </div>
        </div>

        <div className="EEe">
          <button onClick={clickToEdit}>Save</button>
        </div>
      </div>
    </>
  );
}
/**
 *   state = {
  
      // Initially, no file is selected
      selectedFile: null
    };
     
    // On file select (from the pop up)
    onFileChange = event => {
     
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
     
    };
     
    // On file upload (click the upload button)
    onFileUpload = () => {
     
      // Create an object of formData
      const formData = new FormData();
     
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
     
      // Details of the uploaded file
      console.log(this.state.selectedFile);
     
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };
     
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
     
      if (this.state.selectedFile) {
          
        return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
  
            <p>File Type: {this.state.selectedFile.type}</p>
  
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
  
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };
     
    render() {
     
      return (
        <div>
            <h1>
              GeeksforGeeks
            </h1>
            <h3>
              File Upload using React!
            </h3>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
        </div>
      );
    }
  }
  
 */
