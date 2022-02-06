using CreditCard.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CreditCard.Api.DataContext
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options) : base(options)
        {
            //Code goes here
        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
