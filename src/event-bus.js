const events = {}

function on(name, fn) {
  if (!events[name]) events[name] = []
  events[name].push(fn)
}

function off(name, fn) {
  if (!events[name]) return
  events[name] = events[name].filter(f => f !== fn)
}

function emit(name, data) {
  if (!events[name]) return
  events[name].forEach(fn => fn(data))
}

module.exports = {
  on,
  off,
  emit
}