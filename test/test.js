const { MappingMap, MappingObj } = require("..");
const log = require("logging-pretty").default();

const run = (state, cn) => {
  state.set(`num`, 2);
  if (state.get(`num`) == 2) {
    log.success(`[${cn}] [1/13] operation .set()`);
    log.success(`[${cn}] [2/13] operation .get()`);
  }

  const entries = state.entries();
  const entriesValue =
    entries?.next === undefined ? entries[0] : entries.next().value;
  if (entriesValue[0] == `num` && entriesValue[1] == 2) {
    log.success(`[${cn}] [3/13] operation .entries()`);
  }

  state.forEach((v, k) => {
    if (v == 2 && k == `num`) {
      log.success(`[${cn}] [4/13] operation .forEach()`);
    }
  });

  const keys = state.keys();
  const keysValue = keys?.next === undefined ? keys : keys.next().value;
  if (keysValue == `num`) {
    log.success(`[${cn}] [5/13] operation .keys()`);
  }

  const values = state.values();
  const valuesValue = values?.next === undefined ? values : values.next().value;
  if (valuesValue == 2) {
    log.success(`[${cn}] [6/13] operation .values()`);
  }

  if (typeof state.jsonObject() == `object`) {
    log.success(`[${cn}] [7/13] operation .jsonObject()`);
  }

  if (typeof state.jsonString() == `string`) {
    log.success(`[${cn}] [8/13] operation .jsonString()`);
  }

  if (state[`size`] == 1) {
    log.success(`[${cn}] [9/13] operation .size`);
  }

  state[`state`];
  log.success(`[${cn}] [10/13] operation .state`);

  state.delete(`num`);
  if (state.has(`num`) === false) {
    log.success(`[${cn}] [11/13] operation .delete()`);
    log.success(`[${cn}] [12/13] operation .has()`);
  }

  state.set(`num`, 3);
  state.clear();
  if (state[`size`] == 0) {
    log.success(`[${cn}] [13/13] operation .clear()`);
  }

  log.info(`-----------> done`);
};

run(new MappingMap(), `MappingMap`);
run(new MappingObj(), `MappingObj`);
