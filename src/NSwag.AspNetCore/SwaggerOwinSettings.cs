//-----------------------------------------------------------------------
// <copyright file="SwaggerOwinSettings.cs" company="NSwag">
//     Copyright (c) Rico Suter. All rights reserved.
// </copyright>
// <license>https://github.com/NSwag/NSwag/blob/master/LICENSE.md</license>
// <author>Rico Suter, mail@rsuter.com</author>
//-----------------------------------------------------------------------

using System;
using NSwag.CodeGeneration.SwaggerGenerators.WebApi;

#if AspNetOwin
namespace NSwag.AspNet.Owin
#else
namespace NSwag.AspNetCore
#endif
{
    /// <summary>The settings for UseSwagger.</summary>
    public class SwaggerOwinSettings : WebApiToSwaggerGeneratorSettings
    {
        /// <summary>Gets or sets the OWIN base path (when mapped via app.MapOwinPath()) (must start with '/').</summary>
        public string MiddlewareBasePath { get; set; }

        /// <summary>Gets or sets the Swagger URL route (must start with '/').</summary>
        public string SwaggerRoute { get; set; } = "/swagger/v1/swagger.json";

        /// <summary>Gets or sets the Swagger post process action.</summary>
        public Action<SwaggerService> PostProcess { get; set; }

        internal string ActualSwaggerRoute => SwaggerRoute.Substring(MiddlewareBasePath?.Length ?? 0);
    }
}