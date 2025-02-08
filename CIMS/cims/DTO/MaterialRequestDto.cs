namespace cims.DTO
{
    public class MaterialRequestDto
    {
        public string MaterialName { get; set; } = null!;
        public float ReqQty { get; set; }
        public int ProjectId { get; set; } 
    }
}
