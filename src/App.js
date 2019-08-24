import React, { Component } from 'react';
import ReactResumableJs from 'react-resumable-js';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      message: "Please upload a file",
      inputDisable: false
    }
  }
  render(){
    return (
      <div>
          <p>You can add other inputs, selects or stuff right here to complete a form.</p>
          <ReactResumableJs
              maxChunkRetries="100"
              chunkRetryInterval="1000"
              uploaderID="image-upload"
              dropTargetID="myDropTarget"
              filetypes={['db', 'zip', 'bin',"jpg", "JPG", "png", "PNG", "mp4", "MP4", "mkv", "deb"]}
              maxFileSize={1024000000}
              fileAccept="*/*"
              fileAddedMessage="Started!"
              completedMessage="Complete!"
              service="http://localhost:3000/upload"
              textLabel="Uploaded files"
              previousText="Drop to upload your media:"
              disableDragAndDrop={true}
              onFileSuccess={(file, message) => {
                this.setState({message: 'Uploaded', inputDisable: false});
                console.log(file, message);
              }}
              onFileAdded={(file, resumable) => {
                this.setState({message: 'Uploading'});
                resumable.upload();
              }}
              maxFiles={1}
              startButton={true}
              disableInput={this.state.inputDisable}
              pauseButton={true}
              cancelButton={true}
              onFileAddedError={(file, errorCount) => {
                this.setState({message: errorCount});
              }}
              onStartUpload={() => {
                  // this.setState({message: 'Uploading file'});
              }}
              onCancelUpload={() => {
                  this.setState({inputDisable: false});
              }}
              onPauseUpload={() =>{
                this.setState({inputDisable: false});
              }}
              onResumeUpload={() => {
                this.setState({inputDisable: true});
              }}
          />

          <p>Message: {this.state.message}</p>
      </div>
    )
  }
}

export default App;