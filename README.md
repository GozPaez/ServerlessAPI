# ServerlessAPI
This project contains an API Gateway with minimum security requirements.

Introducción

El presente SAM template ha sido diseñado para crear un endpoint seguro en API Gateway, optimizado para un entorno de producción. Se enfoca en cumplir con los requerimientos mínimos de seguridad necesarios para proteger los recursos del sistema, siguiendo las mejores prácticas de AWS. Además, se evalúan opciones futuras para mejorar el análisis y procesamiento de objetos recibidos a través del endpoint.
1. Web Application Firewall (WAFv2)

    WebACL: Se implementa un Web Application Firewall (WAF) regional para proteger el API de ataques comunes. Este WAF incluye las siguientes reglas:
        RateLimitRule: Limita las solicitudes por IP, estableciendo un máximo de 1000 solicitudes en un período de 5 minutos, lo cual mitiga ataques básicos de Denegación de Servicio (DDoS).
        Protección contra Inyección de SQL: Bloquea inyecciones SQL, un tipo común de ataque en APIs.
        Protección XSS: Defiende contra ataques Cross-Site Scripting (XSS), que pueden comprometer la seguridad del sistema.
        PermitSpecificEndpoints: Permite específicamente el endpoint /errortracking y bloquea otros caminos. Este patrón puede extenderse para incluir más endpoints según sea necesario.

Mejoras en Seguridad: Estas reglas proporcionan una capa adicional de protección ante vulnerabilidades comunes en aplicaciones web.
2. API Gateway

    Se ha implementado un API Gateway que requiere API Keys para acceder a los endpoints protegidos. Esta funcionalidad se configura a través del bloque Auth, asegurando que solo los usuarios autenticados con la clave correcta puedan interactuar con el API.

Mejor Práctica: El uso de API Keys permite gestionar el acceso de manera controlada, mejorando la seguridad y facilitando el monitoreo del uso.
3. Lambda Function

    La función Lambda encargada de procesar las solicitudes del API sigue las mejores prácticas de seguridad y escalabilidad:
        Rol IAM Personalizado: El rol IAM asociado a la Lambda tiene los permisos mínimos necesarios para operar, siguiendo el principio de mínimo privilegio. Tiene permisos para interactuar con CloudWatch Logs, pero el acceso a otros recursos está restringido.
        Logging Estructurado: Los logs de la Lambda se almacenan en CloudWatch Logs con un período de retención de 90 días, optimizando tanto el análisis como el almacenamiento a largo plazo.

Mejoras en Seguridad y Gestión de Costos: El uso de roles IAM específicos y el control sobre la retención de logs garantizan una gestión eficiente de la seguridad y de los costos asociados.
4. API Gateway y Planes de Uso

    Se ha configurado un Usage Plan en API Gateway con límites de solicitud (RateLimit: 50 y BurstLimit: 100) para controlar la cantidad de tráfico que llega al API y evitar sobrecargas.
    Un API Key y un plan de uso han sido integrados para gestionar el acceso, permitiendo analizar el consumo del API por cada cliente.

Buenas Prácticas de Control de Tráfico: La implementación de planes de uso garantiza que API Gateway maneje eficientemente el tráfico entrante y permite un control granular sobre los clientes que acceden al API.
5. Análisis de Objetos Recibidos (Consideraciones Futuras)

Actualmente se está evaluando la opción de almacenar los objetos recibidos en Amazon S3 para luego consultarlos mediante Amazon Athena. Esto permitiría un análisis avanzado de los datos recibidos de manera rentable y eficiente.

Además, se está considerando el uso de CloudWatch Dashboards para crear un entorno de monitoreo en tiempo real y un análisis detallado de los datos recibidos. Esto facilitaría la detección temprana de posibles problemas y proporcionaría una mayor visibilidad sobre el comportamiento de las aplicaciones que interactúan con el API.

Soluciones Evaluadas: Estas opciones se están considerando para mejorar las capacidades de análisis y procesamiento de datos sin aumentar significativamente el esfuerzo de desarrollo, manteniendo un alto nivel de seguridad y eficiencia en el almacenamiento de objetos.

5. Outputs

    El template incluye salidas claras para la URL del API Gateway y la API Key necesarias para acceder al API, lo que simplifica la distribución y el uso del API en diferentes entornos.

Conclusiones

Este template sigue las mejores prácticas de AWS para garantizar una arquitectura serverless robusta, escalable y segura. Se incluyen medidas proactivas como el uso de WAF, autenticación mediante API Key, políticas de IAM restringidas y una gestión eficiente del tráfico a través de Usage Plans. Además, se está evaluando la integración de almacenamiento en S3 y análisis con Athena o CloudWatch Dashboards para mejorar el procesamiento y análisis de los objetos recibidos a través del API.