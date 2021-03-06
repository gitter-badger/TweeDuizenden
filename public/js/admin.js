﻿$(function () {
  
  // Delete all;
  $("#g2000n-delete-all").submit(function (e) {
    e.preventDefault();
    
    var form = $(this),
        action = form.attr("action"),
        params = form.serialize(),
        tbody = $("#g2000n-table tbody"),
        rows = tbody.find("tr");
    
    $.post(action, params, "json").done(function (data) {
      if (data.error) {
        console.error(data.error);
      } else {
        rows.fadeOut(function () {
          rows.remove();
          tbody.append($("#empty-template").html());
          $("#g2000n-delete-all button").attr("disabled", true).addClass("disabled");
        });
      }
    }).fail(function (data) {
      console.error(data);
    });
    
    return false;
  });
  
  // Delete per game;
  $(".g2000n-delete").submit(function (e) {
    e.preventDefault();
    
    var form = $(this),
        action = form.attr("action"),
        params = form.serialize(),
        tbody = form.parents("tbody"),
        row = form.parents("tr");
    
    $.post(action, params, "json").done(function (data) {
      if (data.error) {
        console.error(data.error);
      } else {
        row.fadeOut(function () {
          row.remove();
          if (tbody.children("tr").length === 0) {
            tbody.append($("#empty-template").html());
            $("#g2000n-delete-all button").attr("disabled", true).addClass("disabled");
          }
        });
      }
    }).fail(function (data) {
      console.error(data);
    });
    
    return false;
  });
});
