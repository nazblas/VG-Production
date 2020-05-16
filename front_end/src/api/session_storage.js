export function storeDataToSessionStorage() {
fetch('http://127.0.0.1:8000/api/dish/')
  .then(
    function(response) {
      response.json().then(function(data) {
        sessionStorage.setItem('dish',JSON.stringify(data));
      });
    }
  )
  .catch(function(err) {
    console.log('Failed loading dish data.Fetch Error :-S', err);
  });

  fetch('http://127.0.0.1:8000/api/ingredient/')
    .then(
      function(response) {
        response.json().then(function(data) {
          sessionStorage.setItem('ingridient',data);
        });
      }
    )
    .catch(function(err) {
      console.log('Failed loading ingridient data. Fetch Error :-S', err);
    });
  }
