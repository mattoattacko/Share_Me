export default {
  name: 'save',
  title: 'Save',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },     
    {
      name: 'userId', //userid of the user who saved the pin
      title: 'UserID',
      type: 'string',
    }, 
  ]
}