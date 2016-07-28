# FLUX

Flux is the application architecture from Facebook that complements React. It's not a framework or library, but rather a solution to a common problem;
how to build scalable client-side applicaiton.

With the Flux architectur, we can rethink how data flows inside application. Flux makes sure that all data flows only in a single direction.

Both React and Flux share the same concept; one way data flow. How does Flux implement the one way data flow?

With Flux, we separate the concerns of our application into four logical entities:

- Actions
- Dispatcher
- Stores
- Views

**Action** are objects that we create when our application's state change. When new data enters the system, whether through a person interacting with
the application or through a web api call, that data is packaged into an action. An action object has a `type` property that identifies what action it is
and any other properties that our application needs to transition to a new state.

Different actions are identified by a type attribute.

For example, an action

```
var action = {
  type: 'RECEIVE_NEWS',
  news: news
};
```

Where does this action go? What part of our application gets this action?

- Action dispatched to stores

**Stores** contain the application state and logic. Their role is somewhat similar to a model in a traditional MVC, but they manage the state of many objects -
they don't represent a single record of data like ORM models do. They provide methods for accessing that data, but not for changing. If you want to change data
in stores, you have to create and dispatch a new action.

So, how do you dispatch an action? As an name suggest, we will use **Dispatcher** for this.

So, basically, **Action** are provided to the dispatcher in an action creator method. The **Dispatcher** then invokes the callbacks that stores have registered with it,
dispatching actions to all stores. A *Store* registers itself with the dispatcher and provide it with a callback. This callback receives the action as a parameter.
Within this store's callback, a switch statement based on the action's type is used to intepret the action and to provide the proper hooks into store's internal methods.
This allows an action to result in an update to the state of the store, via the dispatcher. After the stores are updated, they broadcast an event, declaring that their
state has changed, so the views maybe query the new state and re-render themselves.

As an application grows, the dispatcher becomes more vital, as it can be used to manage dependencies between the stores by invoking the registered callbacks in a specific order.

This is how out data flow looks like:

```
Actions ---> Dispatcher ---> Stores ---> Views (components)
                   ^                      |
                   |                      |
                   |                      |
                 Actions  <---------------|
```

You can see the **Dispatcher** plays a role of a central element in our data flow. All actions are dispatched by it. Stores regisers by it. All actions are dispatched synchronously.

