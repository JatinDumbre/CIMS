using System.Text.Json.Serialization;
using cims.Models;
using Steeltoe.Discovery.Client;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDiscoveryClient(builder.Configuration);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<P03CimsContext>();
builder.Services.AddControllers().AddJsonOptions(x =>
    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

var app = builder.Build();

//app.UseCors(policy => policy.AllowAnyHeader()
//                .AllowAnyMethod()
//                .SetIsOriginAllowed(origin => true)
//                .AllowCredentials());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseDiscoveryClient();
//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
