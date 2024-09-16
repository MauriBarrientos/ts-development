PGDMP                      |            formotex    16.1    16.1 3    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    18329    formotex    DATABASE     {   CREATE DATABASE formotex WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE formotex;
                postgres    false            �            1259    18392    buy_details    TABLE     �   CREATE TABLE public.buy_details (
    id integer NOT NULL,
    equipment_id integer NOT NULL,
    client_id integer NOT NULL,
    total_amount numeric(10,2) NOT NULL
);
    DROP TABLE public.buy_details;
       public         heap    postgres    false            �            1259    18391    buy_details_id_seq    SEQUENCE     �   CREATE SEQUENCE public.buy_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.buy_details_id_seq;
       public          postgres    false    226            �           0    0    buy_details_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.buy_details_id_seq OWNED BY public.buy_details.id;
          public          postgres    false    225            �            1259    18383    clients    TABLE     �   CREATE TABLE public.clients (
    client_id integer NOT NULL,
    client_name character varying(255) NOT NULL,
    client_email character varying(255) NOT NULL,
    client_address character varying(255) NOT NULL
);
    DROP TABLE public.clients;
       public         heap    postgres    false            �            1259    18382    clients_client_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clients_client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.clients_client_id_seq;
       public          postgres    false    224            �           0    0    clients_client_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.clients_client_id_seq OWNED BY public.clients.client_id;
          public          postgres    false    223            �            1259    18369    equip_infos    TABLE     �   CREATE TABLE public.equip_infos (
    equip_info_id integer NOT NULL,
    brand character varying(255) NOT NULL,
    model character varying(255) NOT NULL,
    description character varying(255)
);
    DROP TABLE public.equip_infos;
       public         heap    postgres    false            �            1259    18368    equip_infos_equip_info_id_seq    SEQUENCE     �   CREATE SEQUENCE public.equip_infos_equip_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.equip_infos_equip_info_id_seq;
       public          postgres    false    222            �           0    0    equip_infos_equip_info_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.equip_infos_equip_info_id_seq OWNED BY public.equip_infos.equip_info_id;
          public          postgres    false    221            �            1259    18350 	   equipment    TABLE     k  CREATE TABLE public.equipment (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(255) NOT NULL,
    stock integer NOT NULL,
    status character varying(255) NOT NULL,
    equip_info_id integer NOT NULL,
    buy_date timestamp with time zone NOT NULL,
    user_id integer NOT NULL,
    supplier_id integer NOT NULL
);
    DROP TABLE public.equipment;
       public         heap    postgres    false            �            1259    18349    equipment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.equipment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.equipment_id_seq;
       public          postgres    false    220            �           0    0    equipment_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.equipment_id_seq OWNED BY public.equipment.id;
          public          postgres    false    219            �            1259    18341 	   suppliers    TABLE     �   CREATE TABLE public.suppliers (
    id integer NOT NULL,
    supplier_name character varying(255) NOT NULL,
    supplier_address character varying(255) NOT NULL,
    supplier_email character varying(255) NOT NULL
);
    DROP TABLE public.suppliers;
       public         heap    postgres    false            �            1259    18340    suppliers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.suppliers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.suppliers_id_seq;
       public          postgres    false    218            �           0    0    suppliers_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.suppliers_id_seq OWNED BY public.suppliers.id;
          public          postgres    false    217            �            1259    18331    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) DEFAULT 'empleado'::character varying NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    18330    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            9           2604    18395    buy_details id    DEFAULT     p   ALTER TABLE ONLY public.buy_details ALTER COLUMN id SET DEFAULT nextval('public.buy_details_id_seq'::regclass);
 =   ALTER TABLE public.buy_details ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            8           2604    18386    clients client_id    DEFAULT     v   ALTER TABLE ONLY public.clients ALTER COLUMN client_id SET DEFAULT nextval('public.clients_client_id_seq'::regclass);
 @   ALTER TABLE public.clients ALTER COLUMN client_id DROP DEFAULT;
       public          postgres    false    223    224    224            7           2604    18372    equip_infos equip_info_id    DEFAULT     �   ALTER TABLE ONLY public.equip_infos ALTER COLUMN equip_info_id SET DEFAULT nextval('public.equip_infos_equip_info_id_seq'::regclass);
 H   ALTER TABLE public.equip_infos ALTER COLUMN equip_info_id DROP DEFAULT;
       public          postgres    false    221    222    222            6           2604    18353    equipment id    DEFAULT     l   ALTER TABLE ONLY public.equipment ALTER COLUMN id SET DEFAULT nextval('public.equipment_id_seq'::regclass);
 ;   ALTER TABLE public.equipment ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            5           2604    18344    suppliers id    DEFAULT     l   ALTER TABLE ONLY public.suppliers ALTER COLUMN id SET DEFAULT nextval('public.suppliers_id_seq'::regclass);
 ;   ALTER TABLE public.suppliers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            3           2604    18334    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    18392    buy_details 
   TABLE DATA           P   COPY public.buy_details (id, equipment_id, client_id, total_amount) FROM stdin;
    public          postgres    false    226   <       �          0    18383    clients 
   TABLE DATA           W   COPY public.clients (client_id, client_name, client_email, client_address) FROM stdin;
    public          postgres    false    224   4<       �          0    18369    equip_infos 
   TABLE DATA           O   COPY public.equip_infos (equip_info_id, brand, model, description) FROM stdin;
    public          postgres    false    222   �<       �          0    18350 	   equipment 
   TABLE DATA           q   COPY public.equipment (id, name, type, stock, status, equip_info_id, buy_date, user_id, supplier_id) FROM stdin;
    public          postgres    false    220   �<       �          0    18341 	   suppliers 
   TABLE DATA           X   COPY public.suppliers (id, supplier_name, supplier_address, supplier_email) FROM stdin;
    public          postgres    false    218   D>       �          0    18331    users 
   TABLE DATA           D   COPY public.users (id, username, email, password, role) FROM stdin;
    public          postgres    false    216   �>       �           0    0    buy_details_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.buy_details_id_seq', 1, false);
          public          postgres    false    225            �           0    0    clients_client_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.clients_client_id_seq', 4, true);
          public          postgres    false    223            �           0    0    equip_infos_equip_info_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.equip_infos_equip_info_id_seq', 1, false);
          public          postgres    false    221            �           0    0    equipment_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.equipment_id_seq', 12, true);
          public          postgres    false    219            �           0    0    suppliers_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.suppliers_id_seq', 4, true);
          public          postgres    false    217            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    215            E           2606    18397    buy_details buy_details_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.buy_details
    ADD CONSTRAINT buy_details_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.buy_details DROP CONSTRAINT buy_details_pkey;
       public            postgres    false    226            C           2606    18390    clients clients_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (client_id);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public            postgres    false    224            A           2606    18376    equip_infos equip_infos_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.equip_infos
    ADD CONSTRAINT equip_infos_pkey PRIMARY KEY (equip_info_id);
 F   ALTER TABLE ONLY public.equip_infos DROP CONSTRAINT equip_infos_pkey;
       public            postgres    false    222            ?           2606    18357    equipment equipment_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.equipment
    ADD CONSTRAINT equipment_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.equipment DROP CONSTRAINT equipment_pkey;
       public            postgres    false    220            =           2606    18348    suppliers suppliers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT suppliers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.suppliers DROP CONSTRAINT suppliers_pkey;
       public            postgres    false    218            ;           2606    18339    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            I           2606    18403 &   buy_details buy_details_client_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.buy_details
    ADD CONSTRAINT buy_details_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.clients(client_id) ON UPDATE CASCADE ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.buy_details DROP CONSTRAINT buy_details_client_id_fkey;
       public          postgres    false    224    226    4675            J           2606    18398 )   buy_details buy_details_equipment_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.buy_details
    ADD CONSTRAINT buy_details_equipment_id_fkey FOREIGN KEY (equipment_id) REFERENCES public.equipment(id) ON UPDATE CASCADE ON DELETE CASCADE;
 S   ALTER TABLE ONLY public.buy_details DROP CONSTRAINT buy_details_equipment_id_fkey;
       public          postgres    false    226    220    4671            H           2606    18377 *   equip_infos equip_infos_equip_info_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.equip_infos
    ADD CONSTRAINT equip_infos_equip_info_id_fkey FOREIGN KEY (equip_info_id) REFERENCES public.equipment(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.equip_infos DROP CONSTRAINT equip_infos_equip_info_id_fkey;
       public          postgres    false    220    4671    222            F           2606    18363 $   equipment equipment_supplier_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.equipment
    ADD CONSTRAINT equipment_supplier_id_fkey FOREIGN KEY (supplier_id) REFERENCES public.suppliers(id) ON UPDATE CASCADE ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.equipment DROP CONSTRAINT equipment_supplier_id_fkey;
       public          postgres    false    4669    220    218            G           2606    18358     equipment equipment_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.equipment
    ADD CONSTRAINT equipment_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.equipment DROP CONSTRAINT equipment_user_id_fkey;
       public          postgres    false    220    216    4667            �      x������ � �      �   �   x�U�9�0 ��W�"�	(t�HRD%��8�J�E>�o�cR�tS�h�9Z�}��f�j�I�Thv�{҆:C�<Y�r]W(��{��#ؙQkS0$K��w��=��B����~)���
ΗC;�sp�Bݛ��g�J�@���Af      �      x������ � �      �   >  x����N�0��㧰؋�o��� "�r-�I�b�M�\:��X���dA���ȟ�����vuC7z��Վry5d��l{�/g�G.�/���� ��@��x7��ۚ���L�M���C"b��'��[CVk�����T �R�p�' Al�s�zo�P��Sc�$6�������=�V����K�V*�p$����y���G�����������Խ���dT(�l�)?��h*�s��,��bT�%r�*�����6d�}c���ƴчx��x�GV�f|�MS|�����}^B~=?�
      �   �   x�u�A� �����~���U�4h0V�v�bN��)L��_R:�ﳃ^�!9|�#�����#e���s��wQ�X)?�=����M�&�f�+ޭ�)t�ب��;��Û5IO(���c���Y�59�YB6�n@�      �   j   x�3��M,-�LJ,*B��s3s���s9U��TTLS�=���S#S2,˂ʋ�,�+��}R����,|��K���}\<�*�
��8SsrRS�b���� �F"�     