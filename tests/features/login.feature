#language: es
Característica: Funcionalidad de inicio de sesión

    Escenario: Inicio de sesión exitoso con usuario estándar
        Dado que Michael está en la página de inicio de sesión de Sauce Demo
        Cuando inicia sesión con el usuario "standard_user" y la contraseña "secret_sauce"
        Entonces debería ver la página de Productos