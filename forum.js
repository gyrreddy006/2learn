const forumPosts = document.getElementById('forumPosts');
const postForm = document.getElementById('postForm');

function loadPosts() {
  const posts = JSON.parse(localStorage.getItem('forumPosts')) || [];
  forumPosts.innerHTML = '';
  posts.forEach((post, index) => {
    const postDiv = document.createElement('div');
    postDiv.className = 'card mb-3';
    postDiv.innerHTML = `
      <div class="card-body">
        <p>${post}</p>
        <button class="btn btn-danger btn-sm" onclick="deletePost(${index})">Delete</button>
      </div>
    `;
    forumPosts.appendChild(postDiv);
  });
}

function deletePost(index) {
  const posts = JSON.parse(localStorage.getItem('forumPosts')) || [];
  posts.splice(index, 1);
  localStorage.setItem('forumPosts', JSON.stringify(posts));
  loadPosts();
}

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const postContent = document.getElementById('postContent').value;
  const posts = JSON.parse(localStorage.getItem('forumPosts')) || [];
  posts.push(postContent);
  localStorage.setItem('forumPosts', JSON.stringify(posts));
  postForm.reset();
  loadPosts();
});

loadPosts();
