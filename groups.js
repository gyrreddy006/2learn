// Add functionality for dynamically creating groups, tasks, or forum posts here.
document.getElementById("createGroupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let groupName = document.getElementById("groupName").value;
  let groupSubject = document.getElementById("groupSubject").value;
  
  let newCard = `
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${groupName}</h5>
          <p class="card-text">Subject: ${groupSubject}</p>
        </div>
      </div>
    </div>
  `;

  document.getElementById("groupCards").innerHTML += newCard;
  $('#addGroupModal').modal('hide');
});
