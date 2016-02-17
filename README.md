#### To run, first use the following command

`git clone https://github.com/jscho13/angular-list.git`

#### Install all dependencies and start the server with

`npm start`

#### Finally, visit

`http://localhost:8000/app`

###### About the Project:

Some key decisions that came with the app was how to organize the data, manipulate the information, and when to display the data in different states.

In terms of organizing the data, three seperate project, department, and deadline JSON files exist. Each of these top level categories contain project ID's. When a top level category is called, all of the project ID's are replaced with their respective JSON file. This allowed more modular code that made replication from one category to the other easier.

To manipulate the information (i.e. add a Deadline or Department), it was important to pass more information through the scope. This way it was easier to identify which index and key value pair that needed to change. Previously I used nested forEach loops. This method proved to be a headache to maintain overtime, and simply providing more information into the parameters turned out to be a more elegant solution.

Finally, displaying data in different states involved refactoring of controllers and organization of the UI-router. In my perspective, the design of the app was more intuitive if each view had separate controllers. This way, it was easier to organize links and navigation from one state to the other.
