'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-7b5c76d02919a57dbd2ff1f225bd65eda5afd3afab25d2ea48fed9a1bfa4a251c49cab0eb0ad7dfaf55b4dfb775610f79713503e8bcd47e9d74e75e06c79247f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-7b5c76d02919a57dbd2ff1f225bd65eda5afd3afab25d2ea48fed9a1bfa4a251c49cab0eb0ad7dfaf55b4dfb775610f79713503e8bcd47e9d74e75e06c79247f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-7b5c76d02919a57dbd2ff1f225bd65eda5afd3afab25d2ea48fed9a1bfa4a251c49cab0eb0ad7dfaf55b4dfb775610f79713503e8bcd47e9d74e75e06c79247f"' :
                                            'id="xs-controllers-links-module-AppModule-7b5c76d02919a57dbd2ff1f225bd65eda5afd3afab25d2ea48fed9a1bfa4a251c49cab0eb0ad7dfaf55b4dfb775610f79713503e8bcd47e9d74e75e06c79247f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-7b5c76d02919a57dbd2ff1f225bd65eda5afd3afab25d2ea48fed9a1bfa4a251c49cab0eb0ad7dfaf55b4dfb775610f79713503e8bcd47e9d74e75e06c79247f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-7b5c76d02919a57dbd2ff1f225bd65eda5afd3afab25d2ea48fed9a1bfa4a251c49cab0eb0ad7dfaf55b4dfb775610f79713503e8bcd47e9d74e75e06c79247f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7b5c76d02919a57dbd2ff1f225bd65eda5afd3afab25d2ea48fed9a1bfa4a251c49cab0eb0ad7dfaf55b4dfb775610f79713503e8bcd47e9d74e75e06c79247f"' :
                                        'id="xs-injectables-links-module-AppModule-7b5c76d02919a57dbd2ff1f225bd65eda5afd3afab25d2ea48fed9a1bfa4a251c49cab0eb0ad7dfaf55b4dfb775610f79713503e8bcd47e9d74e75e06c79247f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-4a12d02ffe5e136ace01068833d9b9fc902ba702360753cb0855ac7050614108ace62ee40a97c16dfe7b8f23344acf3e06cb9f10d0a5e18c490c407aaf0b487a"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-4a12d02ffe5e136ace01068833d9b9fc902ba702360753cb0855ac7050614108ace62ee40a97c16dfe7b8f23344acf3e06cb9f10d0a5e18c490c407aaf0b487a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-4a12d02ffe5e136ace01068833d9b9fc902ba702360753cb0855ac7050614108ace62ee40a97c16dfe7b8f23344acf3e06cb9f10d0a5e18c490c407aaf0b487a"' :
                                            'id="xs-controllers-links-module-AuthModule-4a12d02ffe5e136ace01068833d9b9fc902ba702360753cb0855ac7050614108ace62ee40a97c16dfe7b8f23344acf3e06cb9f10d0a5e18c490c407aaf0b487a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-4a12d02ffe5e136ace01068833d9b9fc902ba702360753cb0855ac7050614108ace62ee40a97c16dfe7b8f23344acf3e06cb9f10d0a5e18c490c407aaf0b487a"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-4a12d02ffe5e136ace01068833d9b9fc902ba702360753cb0855ac7050614108ace62ee40a97c16dfe7b8f23344acf3e06cb9f10d0a5e18c490c407aaf0b487a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-4a12d02ffe5e136ace01068833d9b9fc902ba702360753cb0855ac7050614108ace62ee40a97c16dfe7b8f23344acf3e06cb9f10d0a5e18c490c407aaf0b487a"' :
                                        'id="xs-injectables-links-module-AuthModule-4a12d02ffe5e136ace01068833d9b9fc902ba702360753cb0855ac7050614108ace62ee40a97c16dfe7b8f23344acf3e06cb9f10d0a5e18c490c407aaf0b487a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CartModule-ebcdf9ce5f9dbc0322c832470349a98b9d4b36f66a78314f5108471868df4add9d7dfe700dda313fc1511acd6339f1bac6a5088c46a3ef6425f306920930fb44"' : 'data-bs-target="#xs-controllers-links-module-CartModule-ebcdf9ce5f9dbc0322c832470349a98b9d4b36f66a78314f5108471868df4add9d7dfe700dda313fc1511acd6339f1bac6a5088c46a3ef6425f306920930fb44"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartModule-ebcdf9ce5f9dbc0322c832470349a98b9d4b36f66a78314f5108471868df4add9d7dfe700dda313fc1511acd6339f1bac6a5088c46a3ef6425f306920930fb44"' :
                                            'id="xs-controllers-links-module-CartModule-ebcdf9ce5f9dbc0322c832470349a98b9d4b36f66a78314f5108471868df4add9d7dfe700dda313fc1511acd6339f1bac6a5088c46a3ef6425f306920930fb44"' }>
                                            <li class="link">
                                                <a href="controllers/CartController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CartModule-ebcdf9ce5f9dbc0322c832470349a98b9d4b36f66a78314f5108471868df4add9d7dfe700dda313fc1511acd6339f1bac6a5088c46a3ef6425f306920930fb44"' : 'data-bs-target="#xs-injectables-links-module-CartModule-ebcdf9ce5f9dbc0322c832470349a98b9d4b36f66a78314f5108471868df4add9d7dfe700dda313fc1511acd6339f1bac6a5088c46a3ef6425f306920930fb44"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartModule-ebcdf9ce5f9dbc0322c832470349a98b9d4b36f66a78314f5108471868df4add9d7dfe700dda313fc1511acd6339f1bac6a5088c46a3ef6425f306920930fb44"' :
                                        'id="xs-injectables-links-module-CartModule-ebcdf9ce5f9dbc0322c832470349a98b9d4b36f66a78314f5108471868df4add9d7dfe700dda313fc1511acd6339f1bac6a5088c46a3ef6425f306920930fb44"' }>
                                        <li class="link">
                                            <a href="injectables/CartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrdersModule-0952038dc37fd4648d1bd0341887f5dda0a3c65fe7ea37f65c73f8360559e2e408fb96905ad34ad35334816433355c32a5cc519f01fb20821a240c31464419e7"' : 'data-bs-target="#xs-controllers-links-module-OrdersModule-0952038dc37fd4648d1bd0341887f5dda0a3c65fe7ea37f65c73f8360559e2e408fb96905ad34ad35334816433355c32a5cc519f01fb20821a240c31464419e7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-0952038dc37fd4648d1bd0341887f5dda0a3c65fe7ea37f65c73f8360559e2e408fb96905ad34ad35334816433355c32a5cc519f01fb20821a240c31464419e7"' :
                                            'id="xs-controllers-links-module-OrdersModule-0952038dc37fd4648d1bd0341887f5dda0a3c65fe7ea37f65c73f8360559e2e408fb96905ad34ad35334816433355c32a5cc519f01fb20821a240c31464419e7"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrdersModule-0952038dc37fd4648d1bd0341887f5dda0a3c65fe7ea37f65c73f8360559e2e408fb96905ad34ad35334816433355c32a5cc519f01fb20821a240c31464419e7"' : 'data-bs-target="#xs-injectables-links-module-OrdersModule-0952038dc37fd4648d1bd0341887f5dda0a3c65fe7ea37f65c73f8360559e2e408fb96905ad34ad35334816433355c32a5cc519f01fb20821a240c31464419e7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-0952038dc37fd4648d1bd0341887f5dda0a3c65fe7ea37f65c73f8360559e2e408fb96905ad34ad35334816433355c32a5cc519f01fb20821a240c31464419e7"' :
                                        'id="xs-injectables-links-module-OrdersModule-0952038dc37fd4648d1bd0341887f5dda0a3c65fe7ea37f65c73f8360559e2e408fb96905ad34ad35334816433355c32a5cc519f01fb20821a240c31464419e7"' }>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-93a8f305047b5d9e922e5d4daeffae3d11851b3f0f5df5637977100f6d4d596e35795c4acf37a02d58447180e9f7592f8eaf8e493c88137ccf6cef55be7af5d6"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-93a8f305047b5d9e922e5d4daeffae3d11851b3f0f5df5637977100f6d4d596e35795c4acf37a02d58447180e9f7592f8eaf8e493c88137ccf6cef55be7af5d6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-93a8f305047b5d9e922e5d4daeffae3d11851b3f0f5df5637977100f6d4d596e35795c4acf37a02d58447180e9f7592f8eaf8e493c88137ccf6cef55be7af5d6"' :
                                            'id="xs-controllers-links-module-ProductsModule-93a8f305047b5d9e922e5d4daeffae3d11851b3f0f5df5637977100f6d4d596e35795c4acf37a02d58447180e9f7592f8eaf8e493c88137ccf6cef55be7af5d6"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-93a8f305047b5d9e922e5d4daeffae3d11851b3f0f5df5637977100f6d4d596e35795c4acf37a02d58447180e9f7592f8eaf8e493c88137ccf6cef55be7af5d6"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-93a8f305047b5d9e922e5d4daeffae3d11851b3f0f5df5637977100f6d4d596e35795c4acf37a02d58447180e9f7592f8eaf8e493c88137ccf6cef55be7af5d6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-93a8f305047b5d9e922e5d4daeffae3d11851b3f0f5df5637977100f6d4d596e35795c4acf37a02d58447180e9f7592f8eaf8e493c88137ccf6cef55be7af5d6"' :
                                        'id="xs-injectables-links-module-ProductsModule-93a8f305047b5d9e922e5d4daeffae3d11851b3f0f5df5637977100f6d4d596e35795c4acf37a02d58447180e9f7592f8eaf8e493c88137ccf6cef55be7af5d6"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-2138a2c48e5dc5f9b39b1b7ff32ecfe6d5e6b62e0b6015622fad7df413f3049428df239e3dee39c14f3e3d93c5329428453299b013922443e3496ac2c8da48ee"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-2138a2c48e5dc5f9b39b1b7ff32ecfe6d5e6b62e0b6015622fad7df413f3049428df239e3dee39c14f3e3d93c5329428453299b013922443e3496ac2c8da48ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-2138a2c48e5dc5f9b39b1b7ff32ecfe6d5e6b62e0b6015622fad7df413f3049428df239e3dee39c14f3e3d93c5329428453299b013922443e3496ac2c8da48ee"' :
                                        'id="xs-injectables-links-module-UsersModule-2138a2c48e5dc5f9b39b1b7ff32ecfe6d5e6b62e0b6015622fad7df413f3049428df239e3dee39c14f3e3d93c5329428453299b013922443e3496ac2c8da48ee"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Cart.html" data-type="entity-link" >Cart</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CartItem.html" data-type="entity-link" >CartItem</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Order.html" data-type="entity-link" >Order</a>
                                </li>
                                <li class="link">
                                    <a href="entities/OrderItem.html" data-type="entity-link" >OrderItem</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Product.html" data-type="entity-link" >Product</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddItemDto.html" data-type="entity-link" >AddItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});