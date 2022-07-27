<template>
	<div class="heaedr">
		<div class="header_menu">
			<ul>
				<li><router-link to="/">Главная</router-link></li>
				<li><router-link to="/category">Категории</router-link></li>
				<li><router-link to="/brand">Брэнды</router-link></li>
				<li><router-link to="/model">Модели</router-link></li>
				<li><router-link to="/product">Товары</router-link></li>
				<li><router-link to="/order">Заказы</router-link></li>
				<li><router-link to="/user">Пользователи</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'sidebar-common'
}
</script>

<style>
.heaedr { background: #000; position: fixed; top: 0; height: 100%; width: 200px; padding: 30px; }
.header_menu {  }
.header_menu ul { list-style: none; }
.header_menu ul li { margin: 20px 0; }
.header_menu ul li a { color: #FFF; }
</style>