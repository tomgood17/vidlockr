const client = filestack.init('A36wTBVGBS1iCyxE9FLODz'); 

let options = {
  "displayMode": "inline",
  "container": ".picker-content",
  "maxFiles": 5,
  "accept": [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/bmp",
    "image/gif",
    "application/pdf"
  ],
  "storeTo": {
    "container": "devportal-customers-assets",
    "path": "user-uploads/",
    "region": "us-east-1"
  },
  "fromSources": [
    "local_file_system"
  ],
  "uploadInBackground": false
};

picker = this.client.picker(options);
picker.open();