builder.Services.AddControllers(options =>
{
    options.Filters.Add<CustomExceptionFilter>();
});
