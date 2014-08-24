# Demo

---

## Normal usage

<script src="/sea-modules/sai/3.0.0/seer-sai.js?nowrap"></script>
<script src="/sea-modules/sai/3.0.0/seer-jsniffer.js?nowrap"></script>

````javascript
seajs.use(['sai', 'index'], function(Sai, Saidebar) {

  Sai.on("jserror", function(err){
    Saidebar.error( 'Message: ' + err.msg + '<br/>File: ' +err.file + '<br/>Line: ' + err.line);
  });

  Sai.error(new Error("e1"));
  Sai.error(new Error("e2"));
  Sai.error(new Error("e3"));

  Saidebar.log("log");

  Saidebar.error("error");
  Saidebar.error("error");
  Saidebar.error("error");
  Saidebar.error("error");

  Saidebar.info("info1");
  Saidebar.info("info2");

  Saidebar.warn("warn");
});
````
