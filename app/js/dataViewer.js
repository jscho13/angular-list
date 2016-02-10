angular.module('dataModule', [])
  .factory('projectViewer', function() {

    var data = [
      {"Project": "Show Three Lists",
       "Due": "January 01, 2016 12:00:00",
        "Dept": "App Engineering",
         "Resources": ["Kirk Middleton","Spenser Estrada","Kierra Buckner","Hunter Luna","Ahmad Justice","Breana Medina","Shelbie Cervantes"]},
      {"Project": "Make Stepped List",
       "Due": "January 01, 2016 12:00:00",
        "Dept": "Marketing",
         "Resources": ["Shelbie Cervantes"]},
      {"Project": "Add UI-Router Rules",
       "Due": "March 15, 2016 12:00:00",
        "Dept": "Embedded",
         "Resources": ["Kierra Buckner","Hunter Luna","Ahmad Justice","Breana Medina"]},
      {"Project": "Create Filters",
       "Due": "April 01, 2016 12:00:00",
        "Dept": "SysOps",
         "Resources": ["Spenser Estrada","Breana Medina"]},
      {"Project": "Sum Up Subtotals",
       "Due": "April 01, 2016 12:00:00",
        "Dept": "Embedded",
         "Resources": ["Kirk Middleton"]},
    ];

    var projectView = function() {
      return data;
    }

    return {
      projectView: projectView
    };
  })

  .factory('deadlineViewer', function() {

    var data = [
      {"Due": "January 01, 2016 12:00:00",
       "Project": "Show Three Lists",
        "Dept": "App Engineering",
         "Resources": ["Kirk Middleton","Spenser Estrada","Kierra Buckner","Hunter Luna","Ahmad Justice","Breana Medina","Shelbie Cervantes"]},
      {"Due": "January 01, 2016 12:00:00",
       "Project": "Make Stepped List",
        "Dept": "Marketing",
         "Resources": ["Shelbie Cervantes"]},
      {"Due": "March 15, 2016 12:00:00",
       "Project": "Add UI-Router Rules",
        "Dept": "Embedded",
         "Resources": ["Kierra Buckner","Hunter Luna","Ahmad Justice","Breana Medina"]},
      {"Due": "April 01, 2016 12:00:00",
       "Project": "Create Filters",
        "Dept": "SysOps",
         "Resources": ["Spenser Estrada","Breana Medina"]},
      {"Due": "April 01, 2016 12:00:00",
       "Project": "Sum Up Subtotals",
        "Dept": "Embedded",
         "Resources": ["Kirk Middleton"]},
    ];

    var deadlineView = function() {
      return data;
    }

    return {
      deadlineView: deadlineView
    };
  })

  .factory('departmentViewer', function() {

    var data = [
      {"Due": "January 01, 2016 12:00:00",
       "Project": "Show Three Lists",
        "Dept": "App Engineering",
         "Resources": ["Kirk Middleton","Spenser Estrada","Kierra Buckner","Hunter Luna","Ahmad Justice","Breana Medina","Shelbie Cervantes"]},
      {"Due": "January 01, 2016 12:00:00",
       "Project": "Make Stepped List",
        "Dept": "Marketing",
         "Resources": ["Shelbie Cervantes"]},
      {"Due": "March 15, 2016 12:00:00",
       "Project": "Add UI-Router Rules",
        "Dept": "Embedded",
         "Resources": ["Kierra Buckner","Hunter Luna","Ahmad Justice","Breana Medina"]},
      {"Due": "April 01, 2016 12:00:00",
       "Project": "Create Filters",
        "Dept": "SysOps",
         "Resources": ["Spenser Estrada","Breana Medina"]},
      {"Due": "April 01, 2016 12:00:00",
       "Project": "Sum Up Subtotals",
        "Dept": "Embedded",
         "Resources": ["Kirk Middleton"]},
    ];

    var departmentView = function() {
      return data;
    }

    return {
      departmentView: departmentView
    };
  });
