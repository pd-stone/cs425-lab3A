var Lab3 = (function () {


    var createTable = function (employees) {
        
        var table = document.createElement("table");
       
        // INSERT YOUR CODE HERE (populate HTML table)
        var json = JSON.stringify(employees);
        console.log(json);
        var props = ["id", "employee_name", "employee_age", "employee_salary"];
        var titles = ["ID", "name", "age", "salary"];

        var table = document.createElement("table");
        var title = document.createElement("tr");

        for (h in titles){
          var th = document.createElement("th");
          $(th).html(titles[h]);
          $(title).append(th);
        }
          $(table).append(th);

        var employeeData = employees.data;

        for(var element in employeeData){
          var employee = employeeData[element];
          var dataRow = document.createElement("tr");
          
          for (var p in props){
            var td = document.createElement("td");
            $(td).html(employee[props[p]]);
            $(dataRow).append(td);
          }
          $(table).append(dataRow);
        }



        $("#output").html(table);

    };

    var showMessage = function (response) {
      $("#output").html(response["message"]);
    };

    return {

        onClick: function () {
           $.ajax({
                url: 'https://dummy.restapiexample.com/api/v1/employees',
                method: 'GET',
                dataType: 'json',
                success: createTable
            });

        },
        onClick_post: function () {
         $.ajax({
              url: 'https://dummy.restapiexample.com/api/v1/create',
              method: 'POST',
              dataType: 'json',
              success: showMessage
          });
        },
        onClick_put: function () {
         $.ajax({
              url: 'https://dummy.restapiexample.com/api/v1/update/10',
              method: 'PUT',
              dataType: 'json',
              success: showMessage
          });

        },
        onClick_del: function () {
          $.ajax({
               url: 'https://dummy.restapiexample.com/api/v1/delete/20',
               method: 'DELETE',
               dataType: 'json',
               success: showMessage
           });
 
         },

        jQueryTest: function () {

            var p = document.createElement("p");
            $(p).html("jQuery Version: " + $().jquery);
            $("#output").append(p);

        }

    };

})();
