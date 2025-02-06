using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace cims.Models;

public partial class P03CimsContext : DbContext
{
    public P03CimsContext()
    {
    }

    public P03CimsContext(DbContextOptions<P03CimsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Access> Accesses { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Location> Locations { get; set; }

    public virtual DbSet<Material> Materials { get; set; }

    public virtual DbSet<MaterialProject> MaterialProjects { get; set; }

    public virtual DbSet<MaterialRequest> MaterialRequests { get; set; }

    public virtual DbSet<Project> Projects { get; set; }

    public virtual DbSet<ProjectAllocation> ProjectAllocations { get; set; }

    public virtual DbSet<Report> Reports { get; set; }

    public virtual DbSet<Status> Statuses { get; set; }

    public virtual DbSet<Unit> Units { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserArchive> UserArchives { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=p03_cims", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.2.0-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Access>(entity =>
        {
            entity.HasKey(e => e.AccId).HasName("PRIMARY");

            entity.ToTable("access");

            entity.Property(e => e.AccId).HasColumnName("acc_id");
            entity.Property(e => e.AccessType)
                .HasMaxLength(45)
                .HasColumnName("access_type");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CatId).HasName("PRIMARY");

            entity.ToTable("category");

            entity.Property(e => e.CatId)
                .ValueGeneratedNever()
                .HasColumnName("cat_id");
            entity.Property(e => e.CatName)
                .HasMaxLength(45)
                .HasColumnName("cat_name");
        });

        modelBuilder.Entity<Location>(entity =>
        {
            entity.HasKey(e => e.LocId).HasName("PRIMARY");

            entity.ToTable("location");

            entity.Property(e => e.LocId)
                .ValueGeneratedNever()
                .HasColumnName("loc_id");
            entity.Property(e => e.LocAdd)
                .HasMaxLength(255)
                .HasColumnName("loc_add");
            entity.Property(e => e.LocCity)
                .HasMaxLength(45)
                .HasColumnName("loc_city");
            entity.Property(e => e.LocName)
                .HasMaxLength(100)
                .HasColumnName("loc_name");
        });

        modelBuilder.Entity<Material>(entity =>
        {
            entity.HasKey(e => e.MId).HasName("PRIMARY");

            entity.ToTable("material");

            entity.HasIndex(e => e.CatId, "cat_id_idx");

            entity.HasIndex(e => e.UnitId, "unit_id_idx");

            entity.Property(e => e.MId).HasColumnName("m_id");
            entity.Property(e => e.CatId).HasColumnName("cat_id");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.MName)
                .HasMaxLength(100)
                .HasColumnName("m_name");
            entity.Property(e => e.UnitId).HasColumnName("unit_id");

            entity.HasOne(d => d.Cat).WithMany(p => p.Materials)
                .HasForeignKey(d => d.CatId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("cat_id");

            entity.HasOne(d => d.Unit).WithMany(p => p.Materials)
                .HasForeignKey(d => d.UnitId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("unit_id");
        });

        modelBuilder.Entity<MaterialProject>(entity =>
        {
            entity.HasKey(e => e.MpId).HasName("PRIMARY");

            entity.ToTable("material_project");

            entity.HasIndex(e => e.MatId, "m_id_idx");

            entity.HasIndex(e => e.PjId, "pj_id_idx");

            entity.Property(e => e.MpId).HasColumnName("mp_id");
            entity.Property(e => e.MatId).HasColumnName("mat_id");
            entity.Property(e => e.PjId).HasColumnName("pj_id");
            entity.Property(e => e.Quantity).HasColumnName("quantity");

            entity.HasOne(d => d.Mat).WithMany(p => p.MaterialProjects)
                .HasForeignKey(d => d.MatId)
                .HasConstraintName("mat_id");

            entity.HasOne(d => d.Pj).WithMany(p => p.MaterialProjects)
                .HasForeignKey(d => d.PjId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("pj_id");
        });

        modelBuilder.Entity<MaterialRequest>(entity =>
        {
            entity.HasKey(e => e.ReqId).HasName("PRIMARY");

            entity.ToTable("material_request");

            entity.HasIndex(e => e.MId, "m_id_idx");

            entity.HasIndex(e => e.ProjectId, "project_id_idx");

            entity.HasIndex(e => e.ReqBy, "req_by_idx");

            entity.HasIndex(e => e.StatusId, "status_id_idx");

            entity.Property(e => e.ReqId).HasColumnName("req_id");
            entity.Property(e => e.MId).HasColumnName("m_id");
            entity.Property(e => e.ProjectId).HasColumnName("project_id");
            entity.Property(e => e.ReqBy).HasColumnName("req_by");
            entity.Property(e => e.ReqDate).HasColumnName("req_date");
            entity.Property(e => e.ReqQty).HasColumnName("req_qty");
            entity.Property(e => e.StatusId).HasColumnName("status_id");

            entity.HasOne(d => d.MIdNavigation).WithMany(p => p.MaterialRequests)
                .HasForeignKey(d => d.MId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("m_id");

            entity.HasOne(d => d.Project).WithMany(p => p.MaterialRequests)
                .HasForeignKey(d => d.ProjectId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("project_id");

            entity.HasOne(d => d.ReqByNavigation).WithMany(p => p.MaterialRequests)
                .HasForeignKey(d => d.ReqBy)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("req_by");

            entity.HasOne(d => d.Status).WithMany(p => p.MaterialRequests)
                .HasForeignKey(d => d.StatusId)
                .HasConstraintName("status_id");
        });

        modelBuilder.Entity<Project>(entity =>
        {
            entity.HasKey(e => e.ProjectId).HasName("PRIMARY");

            entity.ToTable("project");

            entity.HasIndex(e => e.LocId, "loc_id_idx");

            entity.Property(e => e.ProjectId).HasColumnName("project_id");
            entity.Property(e => e.LocId).HasColumnName("loc_id");
            entity.Property(e => e.ProjectName)
                .HasMaxLength(100)
                .HasColumnName("project_name");

            entity.HasOne(d => d.Loc).WithMany(p => p.Projects)
                .HasForeignKey(d => d.LocId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("loc_id");
        });

        modelBuilder.Entity<ProjectAllocation>(entity =>
        {
            entity.HasKey(e => e.PaId).HasName("PRIMARY");

            entity.ToTable("project_allocation");

            entity.HasIndex(e => e.PId, "p_id_idx");

            entity.HasIndex(e => e.PmId, "pm_id_idx");

            entity.HasIndex(e => e.SoId, "so_id_idx");

            entity.Property(e => e.PaId).HasColumnName("pa_id");
            entity.Property(e => e.PId).HasColumnName("p_id");
            entity.Property(e => e.PmId).HasColumnName("pm_id");
            entity.Property(e => e.SoId).HasColumnName("so_id");

            entity.HasOne(d => d.PIdNavigation).WithMany(p => p.ProjectAllocations)
                .HasForeignKey(d => d.PId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("p_id");

            entity.HasOne(d => d.Pm).WithMany(p => p.ProjectAllocationPms)
                .HasForeignKey(d => d.PmId)
                .HasConstraintName("pm_id");

            entity.HasOne(d => d.So).WithMany(p => p.ProjectAllocationSos)
                .HasForeignKey(d => d.SoId)
                .HasConstraintName("so_id");
        });

        modelBuilder.Entity<Report>(entity =>
        {
            entity.HasKey(e => e.RepId).HasName("PRIMARY");

            entity.ToTable("report");

            entity.HasIndex(e => e.GenBy, "gen_by_idx");

            entity.HasIndex(e => e.ProjId, "project_id_idx");

            entity.Property(e => e.RepId).HasColumnName("rep_id");
            entity.Property(e => e.GenBy).HasColumnName("gen_by");
            entity.Property(e => e.ProjId).HasColumnName("proj_id");
            entity.Property(e => e.RepDate).HasColumnName("rep_date");

            entity.HasOne(d => d.GenByNavigation).WithMany(p => p.Reports)
                .HasForeignKey(d => d.GenBy)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("gen_by");

            entity.HasOne(d => d.Proj).WithMany(p => p.Reports)
                .HasForeignKey(d => d.ProjId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("proj_id");
        });

        modelBuilder.Entity<Status>(entity =>
        {
            entity.HasKey(e => e.Idstatus).HasName("PRIMARY");

            entity.ToTable("status");

            entity.Property(e => e.Idstatus)
                .ValueGeneratedNever()
                .HasColumnName("idstatus");
            entity.Property(e => e.StatusName)
                .HasColumnType("text")
                .HasColumnName("status_name");
        });

        modelBuilder.Entity<Unit>(entity =>
        {
            entity.HasKey(e => e.UnitId).HasName("PRIMARY");

            entity.ToTable("unit");

            entity.Property(e => e.UnitId).HasColumnName("unit_id");
            entity.Property(e => e.UnitName)
                .HasMaxLength(45)
                .HasColumnName("unit_name");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PRIMARY");

            entity.ToTable("user");

            entity.HasIndex(e => e.AccId, "acc_id_idx");

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.AccId).HasColumnName("acc_id");
            entity.Property(e => e.Address)
                .HasMaxLength(150)
                .HasColumnName("address");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Fname)
                .HasMaxLength(45)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(45)
                .HasColumnName("lname");
            entity.Property(e => e.MobNo)
                .HasMaxLength(10)
                .HasColumnName("mob_no");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.Status)
                .HasMaxLength(45)
                .HasColumnName("status");

            entity.HasOne(d => d.Acc).WithMany(p => p.Users)
                .HasForeignKey(d => d.AccId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("acc_id");
        });

        modelBuilder.Entity<UserArchive>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PRIMARY");

            entity.ToTable("user_archive");

            entity.Property(e => e.UserId)
                .ValueGeneratedNever()
                .HasColumnName("user_id");
            entity.Property(e => e.AccId).HasColumnName("acc_id");
            entity.Property(e => e.Address)
                .HasMaxLength(150)
                .HasColumnName("address");
            entity.Property(e => e.Email)
                .HasMaxLength(45)
                .HasColumnName("email");
            entity.Property(e => e.Fname)
                .HasMaxLength(45)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(45)
                .HasColumnName("lname");
            entity.Property(e => e.MobNo)
                .HasMaxLength(10)
                .HasColumnName("mob_no");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
