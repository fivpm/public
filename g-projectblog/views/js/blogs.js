window.addEventListener("load", () => {    
    fetch("http://localhost:3000/getdata") //fs.readFileSync('./public/myjsonfile.json'
        .then(data => data.json())
        .then(data => {
            //console.log(data);
            //Do the logic
            appendData(data);
        });
        /*function appendData prints old blogs to blog page*/
        function appendData(data) {
                let mainContainer = document.getElementById("blogid");
                for (let i = 0; i < data.table.length; i++) {
                // old blogs are read from json file and are shown on textarea x                   
                    let x = document.createElement("textarea");
                    // ***beginning of commentForm where old blog can be commented ***
                    var commentForm = document.createElement("form")
                    commentForm.setAttribute('method',"post");
                    commentForm.setAttribute('action',"commentsubmit");
                    // form has one input field "newComment" and submit button "newButton"
                    let newComment = document.createElement('input');
                    newComment.setAttribute('type',"text");
                    newComment.setAttribute('id',"commentId");
                    newComment.setAttribute('value', '  Comment: ');
                    let newButton = document.createElement('input');
                    newButton.setAttribute('type', 'button');
                    newButton.setAttribute('value', 'Leave comment');
                    // *** end of creating commentForm ***
                    // old blogs are read from json object data
                    x.innerHTML = 'Blog ' + data.table[i].id + ': ' + data.table[i].body + '\n' + data.table[i].comments;
                    let commentid = data.table[i].id; // blog id is saved to variable
                    mainContainer.appendChild(x);
                    let newCommentData = newComment;
                    //* each Blog comment button = newButton will have commentid number
                    // so that correct blog will get comments
                    newButton.addEventListener("click", function(e) {
                        //console.log('button was clicked ' + commentid + "comment: " + newCommentData.value);
                        // when new comments are added function call will include parameters:
                        // commentid, comment text and data read on line 2 of blogs.js: 
                        // fetch("http://localhost:3000/getdata")
                        newCommentFunc(commentid,newCommentData.value,data);
                        
                    });
                    // to the form will be added text input and submit button
                    commentForm.appendChild(newComment);
                    commentForm.appendChild(newButton);
                    mainContainer.appendChild(commentForm); //mainContainer = document.getElementById("blogid")
                    
                }
        } /**End of function appendData */
       
        function newCommentFunc(a,b,c) { // newCommentFunc(commentid,newCommentData.value,data)
            //console.log('a: ' + a);
            //console.log('b: ' + b);
            //console.log(c);
               fetch('/commentsubmit', { // app.js has app.post('/commentsubmit', (request, response)
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                //body: JSON.stringify({ hi: 'hello' }), // stringify JSON
                //make sure to serialize your JSON body
                body: JSON.stringify({
                  id: a,
                  comments: b
                })
                });
                
          }
});
