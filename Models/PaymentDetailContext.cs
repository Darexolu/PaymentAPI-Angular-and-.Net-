using Microsoft.EntityFrameworkCore;
using System;
using System.Data.Common;

namespace PaymentAPI.Models
{
	public class PaymentDetailContext : DbContext
	{
		public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options) : base(options)
		{

		}
		public DbSet<PaymentDetail> PaymentDetails { get; set; }
	}
}
