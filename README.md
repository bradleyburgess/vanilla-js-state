# Vanilla JS State Management

This is a very simple implementation of state using vanilla Javascript.

State management is achieved through the use of a central `Store` that has state
managed through a `Proxy` object that publishes events through the 
`EventHandler`. Components `subscribe` to state changes through this system,
which causes them to re-`render`.

The [demo](https://vanilla-js-state.netlify.app/) uses a simple counter.
