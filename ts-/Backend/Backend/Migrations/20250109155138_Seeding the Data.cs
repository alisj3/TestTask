using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class SeedingtheData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "Name", "Price" },
                values: new object[,]
                {
                    { new Guid("59544af9-6b65-4eba-b439-41aca82cd090"), "Very dense and accurate table that will take care of your things.", "Wooden Table", 1000 },
                    { new Guid("e490797e-5f04-494d-a0af-81a3394f27af"), "Very dense and accurate soap that will take care of your skin.", "Soap", 500 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("59544af9-6b65-4eba-b439-41aca82cd090"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("e490797e-5f04-494d-a0af-81a3394f27af"));
        }
    }
}
