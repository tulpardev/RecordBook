using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.Abstract;
using Business.Concrete;
using DataAccess.Abstract;
using DataAccess.Concrete.EntitiyFramework;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DbContext>(x => x.UseMySql(@"server=localhost;port=3306;database=RecordBook;user=root;password=password"));
            services.AddControllers();
            services.AddScoped<IUserService, UserManager>();
            services.AddScoped<IUserDal, EfUserDal>();
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
                {
                    builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                }));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, DbContext dbContext)
        {
            dbContext.Database.Migrate();
            var sql = "CREATE TABLE `RecordBook`.`Users` (   `Id` INT NOT NULL AUTO_INCREMENT,   `Name` VARCHAR(45) NULL,   `LastName` VARCHAR(45) NULL,   `BloodGroup` VARCHAR(45) NULL,   `PhoneCountryCode` VARCHAR(45) NULL,   `PhoneNumber` VARCHAR(45) NULL,   `City` VARCHAR(45) NULL,   `Address` VARCHAR(150) NULL,   PRIMARY KEY (`Id`));INSERT INTO `RecordBook`.`Users` (`Name`, `LastName`, `BloodGroup`, `PhoneCountryCode`, `PhoneNumber`, `City`, `Address`) VALUES ( 'Süha', 'Arıkan', '0rh+', '+90', '5554443322', 'ANTALYA', 'Konyaaltı');";
            dbContext.Database.ExecuteSqlRaw(sql);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("AllowAll");


            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
