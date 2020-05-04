var express = require("express"),
  app = express(),
  jasper = require("node-jasper")({
    path: "lib/jasperreports-6.2.0",
    reports: {
      conductores: {
        jasper: "reports/prueba.jasper",
      },
    },
    drivers: {
      pg: {
        path: "lib/postgresql-42.2.12.jre7.jar",
        class: "org.postgresql.Driver",
        type: "postgresql",
      },
    },
    conns: {
      dbserver1: {
        host: "10.10.10.57",
        port: 5432,
        dbname: "adempiere",
        user: "adempiere",
        pass: "adempiere",
        driver: "pg",
      },
    },
    defaultConn: "dbserver1",
  });

app.get("/pdf", function (req, res, next) {
  //beware of the datatype of your parameter.
  var report = {
    report: "conductores",
    data: {
      conductor: "Y",
      limit: Number(req.query.limite) /* parseInt(req.query.id, 10) */,
    },
    //dataset: //main dataset
  };
  var pdf = jasper.pdf(report);
  res.set({
    "Content-type": "application/pdf",
    "Content-Length": pdf.length,
  });
  res.send(pdf);
});

app.listen(3000);
