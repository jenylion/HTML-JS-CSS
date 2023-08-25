var map;
//var contentString = "";
      function initMap() {
          // set the map
        map = new google.maps.Map(document.getElementById('map-div'), {
          center: {lat: 53.550270, lng: 10.025270},
          zoom: 15,
          disableDefaultUI: true
        });

        // setthe marker image
        var image = {
            url: "../imgs/marker.gif",
            // size: new google.maps.Size(200, 200),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(50, 100),
            scaledSize: new google.maps.Size(100, 100)
          };

        // set the marker
        var marker = new google.maps.Marker({
            position: {lat: 53.550270, lng: 10.025270},
            map: map,
            icon: image,
            title: 'DCI Hamburg',
            // label:'DCI',
            draggable:true,
            animation: google.maps.Animation.DROP
          });
          // set up info window
          var infowindow = new google.maps.InfoWindow({
            content: document.querySelector('#windowContainer').innerHTML
          });
          // add event to the marker
          marker.addListener('mouseover', () => {
            infowindow.open(map, marker);
          })
      }
