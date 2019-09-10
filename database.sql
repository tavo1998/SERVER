CREATE TABLE PROVEEDOR(
    nit SERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    direccion VARCHAR(10) NOT NULL,
    email VARCHAR(20) NOT NULL,
    tipo VARCHAR(10) CHECK (tipo IN ('frutas', 'verduras'))
);

CREATE TABLE PRODUCTO(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    cantidad INTEGER DEFAULT 0,
    precio INTEGER NOT NULL
);

CREATE TABLE CLIENTE(
    cc INTEGER PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    direccion VARCHAR(10) NOT NULL,
    email VARCHAR(20) NOT NULL
);

CREATE TABLE EMPLEADO(
    cc INTEGER PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    direccion VARCHAR(10) NOT NULL
);

CREATE TABLE USUARIO(
    nombre VARCHAR(20) PRIMARY KEY,
    clave VARCHAR(50) NOT NULL,
    cc INTEGER NOT NULL,
    FOREIGN KEY(cc) REFERENCES EMPLEADO(cc)
);

CREATE TABLE PEDIDO(
    numeropedido SERIAL PRIMARY KEY,
    fecha DATE NOT NULL DEFAULT NOW(),
    proveedor INTEGER NOT NULL,
    empleado INTEGER NOT NULL,
    FOREIGN KEY(proveedor) REFERENCES PROVEEDOR(nit),
    FOREIGN KEY(empleado) REFERENCES EMPLEADO(cc)
);

CREATE TABLE CONTIENE(
    numeropedido INTEGER,
    producto INTEGER,
    cantidad INTEGER NOT NULL DEFAULT 1,
    FOREIGN KEY(numeropedido) REFERENCES PEDIDO(numeropedido),
    FOREIGN KEY(producto) REFERENCES PRODUCTO(id),
    PRIMARY KEY(numeropedido, producto)
);

CREATE TABLE VENTA(
    numeroventa SERIAL PRIMARY KEY,
    fecha DATE NOT NULL DEFAULT NOW(),
    cliente INTEGER,
    empleado INTEGER,
    FOREIGN KEY(cliente) REFERENCES CLIENTE(cc),
    FOREIGN KEY(empleado) REFERENCES EMPLEADO(cc)
);

CREATE TABLE TIENE(
    numeroventa INTEGER,
    producto INTEGER,
    cantidad INTEGER NOT NULL DEFAULT 1,
    FOREIGN KEY(numeroventa) REFERENCES VENTA(numeroventa),
    FOREIGN KEY(producto) REFERENCES PRODUCTO(id),
    PRIMARY KEY(numeroventa, producto)
);