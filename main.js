let s = "Connection good";
function test() {
    //get_devices.html display
    fetch('http://localhost:9099/api/CentralControl/GetDevices')
        .then(response => {
            // Check if the response status is OK (200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Handle the retrieved JSON data
            console.log("Details:", data);
            //make it one long string
            for (let i = 0; i < data.length; i++) {
                const out = document.getElementById("out");
                const ul = document.createElement("ul");
                const liElementID = document.createElement("li");
                //use indexing for each device
                liElementID.textContent = "Device: " + data[i].ElementID;
                ul.appendChild(liElementID);

                const liElementGuid = document.createElement("li");
                liElementGuid.textContent = "GUID: " + data[i].ElementGuid;
                ul.appendChild(liElementGuid);

                const liElementControls = document.createElement("li");
                liElementControls.textContent = "Has controls: " + data[i].HasControls;
                ul.appendChild(liElementControls);

                const liElementType = document.createElement("li");
                liElementType.textContent = "Device Type: " + data[i].DeviceTypeName;
                ul.appendChild(liElementType);

                out.appendChild(ul);
            }
        })
        .catch(error => {
            // Handle errors during the fetch or JSON parsing
            console.error("Error:", error);
            document.getElementById("out").innerHTML = "Error: " + error;
        });
    
    //check_connection.html page
    fetch('http://localhost:9099/api/CentralControl/GetDevices')
        .then(response => {
            // Check if the response status is OK (200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Handle the retrieved JSON data
            console.log("Details:", data);
            document.getElementById("check").innerHTML = s;
        })
        .catch(error => {
            // Handle errors during the fetch or JSON parsing
            console.error("Error:", error);
            document.getElementById("check").innerHTML = "Error: " + error;
        });
        
    }


test();
