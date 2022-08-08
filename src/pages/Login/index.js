import React, { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const { loginMode, mode, handleLogin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/smartclav.jpeg")}
      />
      <View style={styles.areaLogin}>
        {mode === "admin" ? (
          <Text style={{ fontSize: 18, color: "#252338" }}>ADMINISTRADOR</Text>
        ) : (
          <><Text style={{ fontSize: 18, color: "#252338" }}>USUÁRIO</Text></>
        )}

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#000"
          keyboardType="email-address"
        />

        <TextInput
          secureTextEntry={true}
          style={[styles.input, styles.inputSenha]}
          placeholder="Senha"
          placeholderTextColor="#000"
        />

        <Text style={styles.textoLogin}> Mantenha-me conectado </Text>
      </View>

      <View style={styles.areaBotao}>
        <TouchableOpacity
          onPress={() => handleLogin()}
          style={[styles.botaoEntrar, styles.botao]}
        >
          <Text style={styles.textoBotao}> Entrar </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botaoCadastrar, styles.botao]}>
          <Text style={[styles.textoBotao, styles.textoBotaoCadastrar]}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
      {mode === "user" ? (
        <TouchableOpacity
          style={styles.loginModeArea}
          onPress={() => loginMode("admin")}
        >
          <Text style={styles.loginMode}>Entrar como admin</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => loginMode("user")}>
          <Text style={styles.loginMode}>Entrar como usuário</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
