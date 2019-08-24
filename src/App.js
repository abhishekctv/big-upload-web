import React, { Component } from 'react';
import ReactResumableJs from 'react-resumable-js';
import './App.css';

class App extends Component{
  render(){
    return (
      <div>
          <p>You can add other inputs, selects or stuff right here to complete a form.</p>
          <ReactResumableJs
            uploaderID="image-upload"
            dropTargetID="myDropTarget"
            filetypes={["jpg", "JPG", "png", "PNG", "mp4", "MP4", "mkv", "deb"]}
            maxFileSize={512000000}
            fileAccept="*/*"
            fileAddedMessage="Started!"
            completedMessage="Complete!"
            service="http://localhost:3000/upload"
            textLabel="Uploaded files"
            previousText="Drop to upload your media:"
            disableDragAndDrop={true}
            onFileSuccess={(file, message) => {
              console.log(file, message);
            }}
            onFileAdded={(file, resumable) => {
              console.log('added');
              resumable.upload();
            }}
            maxFiles={1}
            startButton={true}
            pauseButton={true}
            cancelButton={true}
            onStartUpload={() => {
                console.log("Start upload");
            }}
            onCancelUpload={() => {
                this.inputDisable = false;
            }}
            onPauseUpload={() =>{
                this.inputDisable = false;
            }}
            onResumeUpload={() => {
                this.inputDisable = true;
            }}
          />
      </div>
    )
  }
}

export default App;