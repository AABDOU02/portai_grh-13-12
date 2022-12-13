export class CessionPers{

    public cod_soc!: String;
    
    public mat_pers!: String;
    
    public cod_pret!: Number;
    
    public npers!: String;
    
    public cod_etat_pret!: String;
    
    public typ_etat!: String;
    
    public cod_grp_pret!: String;
    
    public typ_pret!: String;
    
    public abrv_fixe!: String;
    
    public org_pret!: String;
    
    public rib_pers!: String;
    
    public prt_dat_dem!: Date;
    
    public prt_mnt_dem!: Number;
    
    public prt_mnt_glb!: Number;
    
    public prt_dat_deb!: Date;
    
    public prt_dat_fin!: Date;
    
    public prt_ech!: Number;
    
    public rem_men!: Number;
    
    public dern_rem_men!: Number;
    
    public prt_rendu!: Number;
    
    public nbr_retenue!: Number;
    
    public objet_pret!: String;
    
    public objet_pret_a!: String;
    
    public dat_saisie!: Date;
    
    public cod_user!: String;
    
    public ordonnance!: String;
    
    public seq_ecrt!: Number;
    
    public ref_pret!: String;
    
    public num_lot!: Number;
    
    public id_cession_pers!: Number;
    
    public ligCession !: LigCessionPers [];
    
}
export class LigCessionPers{
    public cod_soc!: String;
    
    public mat_pers!: String;
    
    public cod_pret!: Number;
    
    public l_pret!: Number;
    
    public cod_typ_bul!: String;
    
    public mois_pret_prevu!: Date;
    
    public mois_pret!: Date;
    
    public mnt_period!: Number;
    
    public cap_rest!: Number;
    
    public val_pret!: String;
    
    public reg_pret!: String;
    
    public nature_etat_pret!: String;
    
    public id_lig_cession!: Number;
}
