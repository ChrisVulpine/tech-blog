// Function to post a comment
async function postComment(postId, commentText, userName) {
    // Create the comment object
    const commentData = {
      postId: postId,
      text: commentText,
      user: userName,
    };
  
    try {



        //FIXME: Not sure about this code==================================================================================

      // Send the POST request to the server
      const response = await fetch('https://yourserver.com/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
        //FIXME:============================================================================================================





      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Handle the response data (e.g., display a success message, update the UI, etc.)
      console.log('Comment posted successfully:', data);
  
      // Optionally return the response data
      return data;
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Example usage:
  // Assuming you have a form where users can submit comments
  document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the form data
    const postId = document.getElementById('postId').value;
    const commentText = document.getElementById('commentText').value;
    const userName = document.getElementById('userName').value;
  
    // Post the comment
    postComment(postId, commentText, userName)
      .then(data => {
        // Optionally handle the response data, e.g., update the UI with the new comment
        console.log('Comment posted:', data);
      });
  });
  