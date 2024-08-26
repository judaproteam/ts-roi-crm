export function fixBoolTaskProp(tasks) {
  return (tasks = tasks.map((t, i) => {
    t.pic = t.pic ? true : false
    t.vid = t.vid ? true : false
    t.mngr = t.mngr ? true : false
    return { ...t, prjId: global.prjId, order: i, id: parseInt(t.id) }
  }))
}

export function err(e) {
  return { msg: e.message, err: true }
}
