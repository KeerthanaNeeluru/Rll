using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UserDetailsApi.Migrations
{
    /// <inheritdoc />
    public partial class newuserdetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "UserDetailss");

            migrationBuilder.DropColumn(
                name: "Contact",
                table: "UserDetailss");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "UserDetailss",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Contact",
                table: "UserDetailss",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
