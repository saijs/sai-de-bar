# Demo

---

## Normal usage

<script src="/sea-modules/sai/3.0.0/seer-sai.js?nowrap"></script>
<script src="/sea-modules/sai/3.0.0/seer-jsniffer.js?nowrap"></script>

````javascript
seajs.use(['sai', 'index'], function(Sai, SaiDeBar) {
  Sai.error(new Error("e"))
  Sai.error(new Error("e"))
  Sai.error(new Error("e"))

  SaiDeBar.error("error")
  SaiDeBar.error("error")
  SaiDeBar.error("error")
  SaiDeBar.error("error")
  SaiDeBar.info("info")
  SaiDeBar.warn("warn")
});
````
