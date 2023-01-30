fetch("https://raw.githubusercontent.com/elizabethho1/project-3/main/Resources/worldcities2.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let properties of products){
      out += `
         <tr>
            <td>${properties.city}> </td>
            <td>${properties.country}</td>
            <td>${properties.meal}</td>
            <td>${properties.busticket}</td>
            <td>${properties.gas}</td>
            <td>${properties.utilities}</td>
            <td>${properties.internet}</td>
            <td>${properties.gym}</td>
            <td>${properties.preschool}</td>
            <td>${properties.rent}</td>
            <td>${properties.avg_monthly_salary}</td>
            <td>${properties.population}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});