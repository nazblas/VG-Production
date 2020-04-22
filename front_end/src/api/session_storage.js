export function storeDataToSessionStorage() {
fetch('./api/dish/')
  .then(
    function(response) {
      response.json().then(function(data) {
        sessionStorage.setItem('dish',data);
      });
    }
  )
  .catch(function(err) {
    console.log('Failed loading dish data.Fetch Error :-S', err);
  });

  fetch('./api/ingridient/')
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
