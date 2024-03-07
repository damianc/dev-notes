# Directed Acyclic Multi-Edged Graph for Network of Train Connections

## Use

```
const network = new TrainNetworkGraph();
const manager = new TrainNetworkManager(
  network
);
const F = new TrainNetworkFacade(
  network, manager
);

// trains

[
 ['IC','FEDCBA',0.25],
 ['IR','GCHIJ',0.20],
 ['TLK','KELMINO',0.15],
 ['KW','QDPHINO',0.10]
].forEach(args => {
  const [id,route,pricePerKM] = args;
  F.addTrain(
    id,
    route.split(''),
    pricePerKM
  );
});

// distances

[
 ['A','B',15], ['B','C',25],
 ['C','D',30], ['D','E',35],
 ['E','F',15], ['G','C',20],
 ['C','H',30], ['H','I',25],
 ['I','J',25], ['K','E',20],
 ['E','L',30], ['L','M',20],
 ['M','I',25], ['I','N',20],
 ['N','O',15], ['Q','D',30],
 ['D','P',15], ['P','H',15]
].forEach(args => {
  F.addConnection(...args);
});

console.log(F.displayConnections(
  'C','I'
));
```

### Output

```

[
  "C -[IR]-> H -[KW]-> I (55 km) -- 8.50 PLN",
  "C -[IR]-> I (55 km) -- 11.00 PLN",
  "C -[IC`]-> D -[KW]-> I (85 km) -- 13.00 PLN",
  "C -[IC`]-> D -[KW]-> H -[IR]-> I (85 km) -- 15.50 PLN",
  "C -[IC`]-> E -[TLK]-> I (140 km) -- 27.50 PLN",
  "C -[IR]-> H -[KW`]-> D -[IC`]-> E -[TLK]-> I (170 km) -- 29.00 PLN"
]
```

## Implementation

```
class TrainNetworkGraph {
  #connections = {};
	
  addConnection(a, b, trainId) {
    if (!(a in this.#connections)) {
      this.#connections[a] = [];
    }
    this.#connections[a].push({
      target: b,
      trainId
    });
  }
	
  addTrain(trainId, route) {
    for (let i=0; i<=route.length-2; i++) {
      const [a,b] = route.slice(i,i+2);
      this.addConnection(a,b,trainId);
      this.addConnection(b,a,trainId+'`');
    }
  }
 
  getRoutes(start, end) {
    const G = this.#connections;
    const routes = [];
    let paths = G[start].map(r => [r]);
 
    while (paths.length > 0) {
      paths = paths.flatMap(path => {
        const rear = path[path.length-1];
        const nextTarget = rear.target;
        if (!(nextTarget in G)) return [];

        const next = G[nextTarget].filter(
          n => this.#excludeCycles(start,path,n)
        );
        return next.map(n => [...path,n]);
      });
	 
      for (let i=paths.length-1; i>=0; i--) {
        const path = paths[i];
        if (
          path[path.length-1].target === end
        ) {
          routes.push(path);
          paths.splice(i,1);
        }
      }
    }

    return routes;
  }
 
  #excludeCycles(start, path, next) {
    return !(
      (next.target === start) ||
      path.some(p => p.target === next.target)
    );
  }

  static compressPath(path) {
    path = path.map(obj => ({...obj}));
    const route = [path[0]];
    while (path.length > 0) {
      const last = route[route.length-1];
      const current = path.shift();

      if (last.trainId === current.trainId) {
        last.target = current.target;
      } else {
        route.push(current);
      }
    }
    return route;
  }
}

class TrainNetworkManager {
  #network;
  #distances = {};
  #prices = {};

  constructor(network) {
    this.#network = network;
  }

  defineDistance(start, end, distance) {
    const D = this.#distances;
    if (!(start in D)) D[start] = {};
    if (!(end in D)) D[end] = {};
    D[start][end] = D[end][start] = distance;
  }

  definePrice(trainId, pricePerKM) {
    const P = this.#prices;
    P[trainId] = P[trainId+'`'] = pricePerKM;
  }

  displayConnections(start, end) {
    const routes = this.#network.getRoutes(
      start, end
    );
    const formatted = routes.map(route => {
      let v = start;
      let price = 0;
      let dist = 0;

      route.forEach((segment,idx) => {
        const {trainId:id,target} = segment;
        const currDist = this.#distances[v][target];
        const currPrice = this.#prices[id];
        price += (currPrice * currDist);
        dist += currDist;
        v = target;
      });

      route = TrainNetworkGraph.compressPath(
        route
      );

      let str = start;
      str += route.map(segment => {
        const {target,trainId:id} = segment;
        return ` -[${id}]-> ${target}`;
      }).join('');
      str += ` (${dist} km)`;
      str += ' -- ';
      str += `${price.toFixed(2)} PLN`;
      return str;
    });
    return formatted;
  }
}

class TrainNetworkFacade {
	#network;
	#manager;
	
	constructor(network, manager) {
		this.#network = network;
		this.#manager = manager;
	}
	
	addTrain(trainId, route, pricePerKM) {
		this.#network.addTrain(
			trainId, route
		);
		this.#manager.definePrice(
			trainId, pricePerKM
		);
	}
	
	addConnection(start, end, distance) {
		this.#manager.defineDistance(
			start,end,distance
		);
 }
 
 displayConnections(start, end) {
 	return this.#manager.displayConnections(
 		start, end
 	);
 }
}
```

### Overview

`TrainNetworkGraph`
- `addConnection(start,end,trainId)`
- `addTrain(trainId,route)`
- `getRoutes(start,end)`
- `static compressPath(path)`

`TrainNetworkManager`
- `constructor(network)`
- `defineDistance(start,end,distance)`
- `definePrice(trainId,pricePerKM)`
- `displayConnections(start,end)`

`TrainNetworkFacade`
- `constructor(network,manager)`
- `addTrain(trainId,route,pricePerKM)`
- `addConnection(start,end,distance)`
- `displayConnections(start,end)`
