# NodeJs Microservices: A simple example

The goal of this project is to implement a simple set of microservices using NodeJs. This is a study case for how do use microservices architecture with the Node/TypeScript stack and is largely based on the course [by Stephen Grider on Udemy](https://www.udemy.com/course/microservices-with-node-js-and-react/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.BR&utm_content=deal4584&utm_term=_._ag_112130202440_._ad_658067503365_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_1001772_._pd__._&matchtype=&gad_source=1&gclid=CjwKCAiAp5qsBhAPEiwAP0qeJrJk_BijvEm6cB6J6rwY8LWRIy0KBncbDAwo4CqVZ_rLknFU-T9InxoCDf8QAvD_BwE).

## Services Description

- **Auth service:** Responsible for handling authentication and authorization. TODO: ADD IMPLEMENTATION DETAILS

## Infrastructure and Deployment

The services are deployed on a Kubernetes cluster, with each service having its own deployment configuration file. `Scaffold` is used to keep images updated on development environment (like a hot-reload for k8s).

### Secrets

To create the needed secrets on the cluster run:

```
kubectl create secret generic [secret-name] --from-literal=[secret-key]=[secret-value]
```

Needed secrets:
- JWT_SECRET