// Function to fetch a post by ID
async function fetchPostById(postId) {
    try {
      const response = await fetch(`https://yourserver.com/api/posts/${postId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const postData = await response.json();
      return postData;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Function to update a blog post
  async function updatePost(postId, title, content, author) {
    const postData = {
      title: title,
      content: content,
      author: author,
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

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const data = await response.json();
      console.log('Post updated successfully:', data);
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Example usage: 
  // Assuming you have a form where users can edit their blog posts
  document.getElementById('editPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const postId = document.getElementById('postId').value;
    const title = document.getElementById('editTitle').value;
    const content = document.getElementById('editContent').value;
    const author = document.getElementById('editAuthor').value;
  
    updatePost(postId, title, content, author)
      .then(data => {
        console.log('Post updated:', data);
      });
  });
  
  // Function to populate the form with existing post data
  async function populateForm(postId) {
    const postData = await fetchPostById(postId);
  
    if (postData) {
      document.getElementById('postId').value = postData.id;
      document.getElementById('editTitle').value = postData.title;
      document.getElementById('editContent').value = postData.content;
      document.getElementById('editAuthor').value = postData.author;
    }
  }
  
  // Call populateForm with the postId you want to edit
  populateForm('123'); // Example postId
  